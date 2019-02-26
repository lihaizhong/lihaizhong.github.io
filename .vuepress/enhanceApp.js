// 引入normalize.css  保证所有浏览器都有相同的浏览体验
import 'normalize-css/normalize'
import registerGlobalFilters from './extensions/filters'

export default ({ Vue, options, router, siteData }) => {
  registerGlobalFilters(Vue)

  Vue.prototype.$screenPointBreak = 768
}
