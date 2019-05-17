import API from '../services/wechat'
import URLSearch from './URLSearch'

function gotoWechat(needReady = true) {
  if (typeof window !== undefined) {
    const isWechatEnv = /MicroMessenger/gi.test(window.navigator.userAgent)
    return new Promise((resolve, reject) => {
      isWechatEnv && 'wx' in window
        ? needReady
          ? wx.ready(resolve)
          : resolve()
        : reject('当前环境不是微信环境')
    })
  } else {
    return Promise.reject('当前环境不是浏览器环境')
  }
}

const WX_JS_API_LIST = [
  'onMenuShareQQ',
  'onMenuShareAppMessage',
  'onMenuShareTimeline',
  'showMenuItems',
  'hideMenuItems',
  'chooseWXPay',
  'closeWindow'
]

class Wechat {
  initialize() {
    return gotoWechat(false).then(() => {
      console.log('微信平台初始化')
      const link = encodeURIComponent(location.href.split('#')[0])
      const debug = !!URLSearch.getQueryString('debug')

      API.wechatSignatureApi(link).then(response => {
        const { appId, timestamp, nonceStr, signature } = response
        wx.config({
          debug,
          appId,
          timestamp,
          nonceStr,
          signature,
          jsApiList: WX_JS_API_LIST
        })
      })

      wx.error(res => console.error(res))
    })
  }

  share(title, desc, imgUrl, link = location.href) {
    return gotoWechat().then(() => {
      return new Promise((resolve, reject) => {
        const options = {
          title,
          desc,
          imgUrl,
          link,
          success: resolve,
          cancel: reject
        }

        if ('updateAppMessageShareData' in wx) {
          wx.updateAppMessageShareData(options)
        } else {
          if ('onMenuShareAppMessage' in wx) {
            wx.onMenuShareAppMessage(options)
          }

          if ('onMenuShareQQ' in wx) {
            wx.onMenuShareQQ(options)
          }
        }

        if ('updateTimelineShareData' in wx) {
          wx.updateTimelineShareData(options)
        } else {
          if ('onMenuShareTimeline' in wx) {
            wx.onMenuShareTimeline(options)
          }

          if ('onMenuShareQZone' in wx) {
            wx.onMenuShareQZone(options)
          }
        }
      })
    })
  }

  hideMenuItems(menuList) {
    return gotoWechat().then(() => wx.hideMenuItems({ menuList }))
  }

  showMenuItems(menuList) {
    return gotoWechat().then(() => wx.showMenuItems({ menuList }))
  }

  pay() {
    return gotoWechat().then(() => {
      return new Promise((resolve, reject) => {
        wx.chooseWXPay({
          timestamp: 0,
          nonceStr: '',
          package: '',
          signType: '',
          paySign: '',
          success: resolve,
          cancel: reject
        })
      })
    })
  }

  close() {
    return gotoWechat().then(() => wx.closeWindow())
  }
}

export default new Wechat()
