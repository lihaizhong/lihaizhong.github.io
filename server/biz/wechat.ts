import * as querystring from 'querystring'
import * as crypto from 'crypto'
import axios from 'axios'
import * as LRUCache from 'lru-cache'

// 将token保存到缓存中
const cache = new LRUCache({
  // 保存一个半小时，保证数据正常
  maxAge: 6300000,
  length: n => n.length
})

class WechatTools {
  getWechatAppId() {
    return process.env.APP_ID
  }

  getWechatNonce() {
    return process.env.APP_NONCE
  }

  getWechatToken() {
    return process.env.APP_TOKEN
  }

  getWechatSecret() {
    return process.env.APP_SECRET
  }

  generateTimestamp() {
    return Math.floor(Date.now() / 1000)
  }

  generateSignature(jsapi_ticket, noncestr, timestamp, url) {
    const params = {
      jsapi_ticket,
      noncestr,
      timestamp,
      url
    }
    const hash = crypto.createHash('sha1')
    const q = querystring.stringify(params)
    console.log(`签名参数: ${q}`)
    hash.update(q)
    const signature = hash.digest('hex')
    console.log(`签名结果: ${signature}`)
    return signature
  }

  checkSignature(signature, timestamp, nonce) {
    const arr = [timestamp, this.getWechatToken(), nonce]
    const seed = arr
      .sort()
      .reduce((accumulator, currentValue) => accumulator + currentValue)
    const hash = crypto.createHash('sha1')
    hash.update(seed)
    return signature === hash.digest('hex')
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
        appid: this.getWechatAppId(),
        secret: this.getWechatSecret()
      }
    }).then(response => {
      const { access_token } = response.data
      console.log(`access_token: ${access_token}`)
      return axios({
        method: 'GET',
        url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
        params: {
          access_token,
          type: 'jsapi'
        }
      }).then(response => {
        const { ticket } = response.data
        console.log(`jsapi_ticket: ${ticket}`)
        // 缓存票据，防止频繁调用导致微信接口调用受限，票据的有效时间为2小时
        cache.set('jsapi_ticket', ticket)
        return ticket
      })
    })
  }
}

export default new WechatTools()
