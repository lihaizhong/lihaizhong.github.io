import * as querystring from 'querystring'
import * as crypto from 'crypto'
import axios from 'axios'
import * as LRUCache from 'lru-cache'
import config from '../config'

// 将token保存到缓存中
const cache = new LRUCache({
  // 保存一个半小时，保证数据正常
  maxAge: 5400000,
  length(n) {
    return n.length
  }
})

class WechatTools {
  getWechatAppId() {
    return config.appId
  }

  getWechatNonce() {
    return config.appNonce
  }

  generateTimestamp() {
    return Math.floor(Date.now() / 1000)
  }

  checkSignature(signature, timestamp, nonce) {
    const arr = [timestamp, config.appToken, nonce]
    const seed = arr
      .sort()
      .reduce((accumulator, currentValue) => accumulator + currentValue)
    const hash = crypto.createHash('sha1')
    hash.update(seed)
    return signature === hash.digest('hex')
  }

  generateSignature(jsapi_ticket, noncestr, timestamp, url) {
    const params = {
      jsapi_ticket,
      noncestr,
      timestamp,
      url
    }
    const hash = crypto.createHash('sha1')
    hash.update(querystring.stringify(params))
    return hash.digest('hex')
  }

  getWechatTicket() {
    // 对缓存中不经常使用的数据进行清理
    cache.prune()
    const jsapi_ticket = cache.peek('jsapi_ticket')

    // 如果有缓存并且缓存没有过期，就读取缓存
    if (jsapi_ticket) {
      return Promise.resolve(jsapi_ticket)
    }

    // 没有命中缓存，从微信接口获取，并保存到缓存中
    return axios({
      method: 'GET',
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      params: {
        grant_type: 'client_credential',
        appid: config.appId,
        secret: config.appSecret
      }
    }).then(response => {
      if (response.status === 200 && response.data.errcode === 0) {
        return axios({
          method: 'GET',
          url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
          params: {
            access_token: response.data.access_token,
            type: 'jsapi'
          }
        }).then(response => {
          const jsapi_ticket = response.data.ticket
          // 缓存票据，防止频繁调用导致微信接口调用受限，票据的有效时间为2小时
          cache.set('jsapi_ticket', jsapi_ticket)
          return jsapi_ticket
        })
      }
    })
  }
}

export default new WechatTools()
