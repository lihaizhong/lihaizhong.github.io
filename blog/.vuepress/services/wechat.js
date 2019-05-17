import http from './index'

export const wechatSignatureApi = link => {
  return http.get('wechat/signature', {
    params: { link }
  })
}

export default {
  wechatSignatureApi
}
