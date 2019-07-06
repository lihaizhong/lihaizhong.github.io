import Comment from './components/Comment.vue'
import logger from './utils/development'

function insertCommentFragment(Vue) {
  logger.log('创建评论区')
  if (process.env.NODE_ENV === 'production') {
    const $target = document.querySelector('.content-wrapper')

    if ($target instanceof HTMLDivElement) {
      const el = document.createElement('div')
      const CommentExtend = Vue.extend(Comment)
      const commentInstance = new CommentExtend({ el })
      $target.appendChild(commentInstance.$el)
      logger.log('评论区创建成功')

      return function() {
        logger.log('移除评论区')
        $target.removeChild(commentInstance.$el)
      }
    }
  }

  return null
}

export default ({ Vue, router, options, siteData }) => {
  let removeCommentFn = null
  logger.log(siteData)
  logger.log(options)
  logger.log(router)

  router.afterEach(to => {
    logger.debug(to.path)
    if (/^\/post\//.test(to.path)) {
      Vue.nextTick(() => {
        removeCommentFn = insertCommentFragment(Vue)
      })
    } else {
      if (typeof removeCommentFn === 'function') {
        Vue.nextTick(() => {
          removeCommentFn()
          removeCommentFn = null
        })
      }
    }
  })
}
