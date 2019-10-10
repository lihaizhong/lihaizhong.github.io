import * as Koa from 'koa'
// import * as favicon from 'koa-favicon'
// import * as serve from 'koa-static'
import './config'
import router from './routers'

// 当发生未捕获异常时，拦截错误。防止错误导致node主程序停止运行
process.on('uncaughtException', err => {
  console.error(err)
})

// exit是在node程序被关闭时触发
// 注意，不能在这里使用异步操作，因为事件循环在exit事件之后不会再被执行。
// process.on('exit', () => {})

// 开始从标准输入读取内容，所以程序不会退出
// process.stdin.resume()

// 当按下`CTRL + C`时，触发此事件
process.on('SIGINT', () => {
  console.log('应用程序已被关闭')
})

// 创建服务器实例
const server = new Koa()

// 路由加载
server.use(router.routes()).use(router.allowedMethods())

server.listen(process.env.PORT, () => {
  console.log(`服务器已启动！端口号是：${process.env.PORT}`)
  console.log(`node version: ${process.version}`)
  console.log(`platform: ${process.platform}`)
  console.log(`pid: ${process.pid}`)
})
