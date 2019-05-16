import { http } from './index'

export const wechatSginatureApi = link => {
  return http.get('wechat/signature', {
    params: {
      link
    }
  })
}
