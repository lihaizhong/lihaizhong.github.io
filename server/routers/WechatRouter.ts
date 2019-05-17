import * as Router from 'koa-router'
import wechatTools from '../biz/wechat'
import ResultWrapper from '../utils/ResultWrapper'

const router = new Router({ prefix: '/wechat/' })

router.get('check', ctx => {
  const { signature, timestamp, nonce, echostr } = ctx.query
  const valid = wechatTools.checkSignature(signature, timestamp, nonce)

  ctx.body = new ResultWrapper().success(valid ? echostr : 'mismatch')
})

router.get('signature', async ctx => {
  const link =
    (ctx.query.link || '').split('#')[0] ||
    (ctx.req.headers.referer || '').split('#')[0]
  const noncestr = wechatTools.getWechatNonce()
  const timestamp = wechatTools.generateTimestamp()
  // 获取缓存，但不更新缓存的最近使用
  const jsapi_ticket = await wechatTools.getWechatTicket()
  const signature = wechatTools.generateSignature(
    jsapi_ticket,
    noncestr,
    timestamp,
    link
  )

  ctx.body = new ResultWrapper().success({
    nonceStr: noncestr,
    appId: wechatTools.getWechatAppId(),
    timestamp,
    signature
  })
})

export default router
