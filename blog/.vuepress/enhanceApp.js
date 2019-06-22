import Comment from './components/Comment.vue'

function insertCommentFragment(Vue) {
  if (process.env.NODE_ENV === 'production') {
    const $target = document.querySelector('.content-wrapper')

    if ($target instanceof HTMLDivElement) {
      const el = document.createElement('div')
      const CommentExtend = Vue.extend(Comment)
      const commentInstance = new CommentExtend({ el })
      $target.appendChild(commentInstance.$el)

      return function() {
        $target.removeChild(commentInstance.$el)
      }
    }
  }

  return null
}

export default ({ Vue, router }) => {
  let removeCommentFn = null
  router.afterEach(to => {
    if (/^\/post\//.test(to.path)) {
      Vue.nextTick(() => {
        removeCommentFn = insertCommentFragment(Vue)
      })
    } else {
      typeof removeCommentFn === 'function' && removeCommentFn()
    }
  })
}
