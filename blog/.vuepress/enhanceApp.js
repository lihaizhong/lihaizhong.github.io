// 引入normalize.css  保证所有浏览器都有相同的浏览体验
import 'normalize-css/normalize'
import DEVICE from './constants/device'
import registerGlobalFilters from './extensions/filters'

export default ({ Vue }) => {
  // 注册全局过滤器
  registerGlobalFilters(Vue)

  if (typeof window !== 'undefined') {
    const UA = window.navigator.userAgent

    if (/pad/gi.test(UA)) {
      Vue.prototype.$device = DEVICE.PAD
    } else if (/mobile/gi.test(UA)) {
      Vue.prototype.$device = DEVICE.MOBILE
    } else {
      Vue.prototype.$device = DEVICE.PC
    }
  } else {
    Vue.prototype.$device = DEVICE.PC
  }
}
