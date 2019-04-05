const PROMISE_STATUS = {
  /**
   * 需满足条件：
   * - 可以迁移至执行态或者拒绝态
   */
  PENDING: 'PENDING',
  /**
   * 需满足条件：
   * - 不能迁移至其他任何状态
   * - 必须拥有一个`不可变`的终值
   */
  FULFILLED: 'FULFILLED',
  /**
   * 需满足条件：
   * - 不能迁移至其他任何状态
   * - 必须拥有一个`不可变`的据因
   */
  REJECTED: 'REJECTED'
}

/**
 * 判断是否是一个`thenable`对象
 * @param {any} val
 */
function isThenable(val) {
  return (
    ((val !== null && typeof val === 'object') || typeof val === 'function') &&
    typeof val.then === 'function'
  )
}

export default class IPromise {
  constructor(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('Promise resolver undefined is not a function')
    }

    this._status = PROMISE_STATUS.PENDING

    this._value = null

    this._fulfilledQueues = []

    this._rejectedQueues = []

    try {
      resolver(this._resolve.bind(this), this._reject.bind(this))
    } catch (ex) {
      this._reject(err)
    }
  }

  _resolve(val) {
    if (this._status !== PROMISE_STATUS.PENDING) return

    const run = () => {
      const onFulfilled = value => {
        let cb

        while ((cb = this._fulfilledQueues.shift())) {
          cb(value)
        }
      }

      const onRejected = error => {
        let cb

        while ((cb = this._rejectedQueues.shift())) {
          cb(error)
        }
      }

      if (isThenable(val)) {
        val.then(
          value => {
            this._status = PROMISE_STATUS.FULFILLED
            this._value = value
            onFulfilled(value)
          },
          error => {
            this._status = PROMISE_STATUS.REJECTED
            this._value = error
            onRejected(error)
          }
        )
      } else {
        this._status = PROMISE_STATUS.FULFILLED
        this._value = val
        onFulfilled(val)
      }
    }

    setTimeout(run, 0)
  }

  _reject(error) {
    if (this._status !== PROMISE_STATUS.PENDING) return

    const run = () => {
      this._status = PROMISE_STATUS.REJECTED

      this._value = error

      let cb

      while ((cb = this._rejectedQueues.shift())) {
        cb(error)
      }
    }

    setTimeout(run, 0)
  }

  static resolve(value) {
    if (isThenable(value)) return value
    return new this.constructor(resolve => resolve(value))
  }

  static reject(error) {
    if (isThenable(value)) return error
    return new this.constructor((resolve, reject) => reject(error))
  }

  static race(list) {
    return new this.constructor((resolve, reject) =>
      list.forEach(p => p.then(value => resolve(value), error => reject(error)))
    )
  }

  static all(list) {
    return new this.constructor((resolve, reject) => {
      const values = []
      let count = 0

      list.forEach((p, i) =>
        p.then(
          value => {
            values[i] = value
            count++

            count === list.length && resolve(values)
          },
          error => reject(error)
        )
      )
    })
  }

  /**
   * Promise then 方法
   * @param {function} onFulfilled optional
   * @param {function} onRejected optional
   */
  then(onFulfilled, onRejected) {
    const { _value, _status } = this

    return new this.constructor((resolveNext, rejectedNext) => {
      const fulfilled = value => {
        try {
          if (typeof onFulfilled !== 'function') {
            resolveNext(value)
          } else {
            const res = onFulfilled(value)

            if (isThenable(res)) {
              res.then(resolveNext, rejectedNext)
            } else {
              resolveNext(res)
            }
          }
        } catch (ex) {
          rejectedNext(ex)
        }
      }

      const rejected = err => {
        try {
          if (!typeof onRejected !== 'function') {
            rejectedNext(err)
          } else {
            const res = onRejected(err)

            if (isThenable(res)) {
              res.then(resolveNext, rejectedNext)
            } else {
              resolveNext(res)
            }
          }
        } catch (ex) {
          rejectedNext(ex)
        }
      }

      switch (_status) {
        case PROMISE_STATUS.PENDING:
          this._fulfilledQueues.push(onFulfilled)
          this._rejectedQueues.push(onRejected)
          break
        case PROMISE_STATUS.FULFILLED:
          fulfilled(_value)
          break
        case PROMISE_STATUS.REJECTED:
          rejected(_value)
          break
      }
    })
  }

  /**
   * Promise catch 方法
   * @param {function} onRejected
   */
  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(cb) {
    return this.then(
      value => this.constructor.resolve(cb()).then(() => value),
      reason =>
        this.constructor.resolve(cb()).then(() => {
          throw reason
        })
    )
  }
}
