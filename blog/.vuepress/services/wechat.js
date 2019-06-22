import http from 'http'

export const wechatSignatureApi = link => {
  return http.get('wechat/signature', {
    params: { link }
  })
}

export default {
  wechatSignatureApi
}
