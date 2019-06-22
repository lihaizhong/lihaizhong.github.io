import Comment from './components/Comment.vue'

function insertCommentFragment(Vue) {
  if (process.env.NODE_ENV === 'production') {
    const $target = document.querySelector('.content-wrapper')

    if ($target instanceof HTMLDivElement) {
      const el = document.createElement('div')
      const CommentExtend = Vue.extend(Comment)
      const commentInstance = new CommentExtend({ el })
      $target.appendChild(commentInstance.$el)
    }
  }
}

export default ({ Vue, router }) => {
  router.afterEach(to => {
    if (/^\/post\//.test(to.path)) {
      Vue.nextTick(() => insertCommentFragment(Vue))
    }
  })
}
