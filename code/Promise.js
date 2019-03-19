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

class IPromise {
  constructor(resolver) {
    if (!(this instanceof IPromise)) {
      throw new TypeError(`${this} is not a promise`)
    }

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

    this._status = PROMISE_STATUS.FULFILLED

    this._value = val

    this._fulfilledQueues.forEach(fulfilled => fulfilled(this._value))
  }

  _reject(err) {
    if (this._status !== PROMISE_STATUS.PENDING) return

    this._status = PROMISE_STATUS.REJECTED

    this._value = err

    this._rejectedQueues.forEach(rejected => rejected(this._value))
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

            if (res instanceof this.constructor) {
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

            if (res instanceof this.constructor) {
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
}
