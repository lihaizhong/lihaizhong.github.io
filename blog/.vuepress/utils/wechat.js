import * as API from '@/services/wechat'

function gotoWechat() {
  if (typeof window !== undefined) {
    const isWechatEnv = /micromessager/gi.test(window.navigator.userAgent)
    return new Promise((resolve, reject) => {
      isWechatEnv && 'wx' in window ? wx.ready(resolve) : reject()
    })
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
    return gotoWechat().then(() => {
      const link = location.href.split('#')[0]

      API.wechatSginatureApi(link).then(response => {
        const { appId, timestamp, nonceStr, signature } = response.data
        wx.config({
          debug: process.env.NODE_ENV !== 'production',
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
