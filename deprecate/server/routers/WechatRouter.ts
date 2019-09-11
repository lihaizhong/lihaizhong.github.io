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
  const {
    getWechatAppId,
    getWechatNonce,
    generateTimestamp,
    getWechatTicket,
    generateSignature
  } = wechatTools

  // 获取缓存，但不更新缓存的最近使用
  try {
    const link = (ctx.query.link || ctx.req.headers.referer || '').split('#')[0]
    const ticket = await getWechatTicket()
    const appId = getWechatAppId()
    const nonceStr = getWechatNonce()
    const timestamp = generateTimestamp()
    const signature = generateSignature(ticket, nonceStr, timestamp, link)

    ctx.body = new ResultWrapper().success({
      nonceStr,
      appId,
      timestamp,
      signature
    })
  } catch (ex) {
    ctx.body = new ResultWrapper().fail('获取ticket失败')
  }
})

export default router
