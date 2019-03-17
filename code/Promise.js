const PROMISE_STATUS = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
}

class IPromise {
  constructor(resolver) {
    if (typeof resolver !== 'function') {
      throw new Error('Promise resolver undefined is not a function')
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
  }

  _reject(err) {
    if (this._status !== PROMISE_STATUS.PENDING) return

    this._status = PROMISE_STATUS.REJECTED

    this._value = err
  }

  /**
   * Promise then 方法
   * onFulfilled 函数特性：
   * 1. 当 Promise 状态变为成功时必须被调用，其第一个参数为 Promise 成功状态传入的值
   * 2. 在 Promise 状态改变前其不可被调用
   * 3. 其调用不得超过一次
   * @param {function} onFulfilled optional
   * @param {function} onRejected optional
   */
  then(onFulfilled, onRejected) {
    const { _value, _status } = this

    return new this.constructor((onFulfilledNext, onRejectedNext) => {
      const fulfilled = value => {
        try {
          if (typeof onFulfilled !== 'function') {
            res.then(onFulfilledNext, onRejectedNext)
          } else {
            const res = onFulfilled(value)

            if (res instanceof this.constructor) {
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              onFulfilledNext(res)
            }
          }
        } catch (ex) {
          onRejectedNext(ex)
        }
      }

      const rejected = err => {
        try {
          if (!typeof onRejected !== 'function') {
            onRejectedNext(err)
          } else {
            const res = onRejected(err)

            if (res instanceof this.constructor) {
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              onFulfilledNext(res)
            }
          }
        } catch (ex) {
          onRejectedNext(ex)
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
   * onRejected 函数特性：
   * 1. 当 Promise 状态变为失败时必须被调用，其第一个参数为 Promise 失败状态传入的值
   * 2. 在 Promise 状态改变前其不可被调用
   * 3. 其调用不得超过一次
   * @param {function} onRejected
   */
  catch(onRejected) {
    return this.then(null, onRejected)
  }
}
