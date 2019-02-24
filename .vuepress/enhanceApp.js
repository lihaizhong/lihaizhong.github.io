// 引入normalize.css  保证所有浏览器都有相同的浏览体验
import 'normalize-css'
import registerGlobalFilters from './extensions/filters'

export default ({ Vue, options, router, siteData }) => {
  console.log('【siteData】', siteData)
  console.log('【options】', options)

  registerGlobalFilters(Vue)
}
