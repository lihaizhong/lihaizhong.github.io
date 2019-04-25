import * as Koa from 'koa'
import * as favicon from 'koa-favicon'
import * as serve from 'koa-static'
// import * as dotenv from 'dotenv'
import config from './config'
import router from './routers'

// 创建服务器实例
const server = new Koa()

// 解析.env文件
// dotenv.config()
// 路由加载
server.use(router.routes()).use(router.allowedMethods())

server.listen(config.port, () => {
  console.log(`服务器已启动！端口号是：${config.port}`)
})
