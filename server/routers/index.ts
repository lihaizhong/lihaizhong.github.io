import * as Router from 'koa-router'
import WechatRouter from './WechatRouter'

const router = new Router()

const ROUTERS = [WechatRouter]

ROUTERS.forEach(r => router.use(r.routes(), r.allowedMethods()))

export default router
