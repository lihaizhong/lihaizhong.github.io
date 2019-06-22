import Comment from './components/Comment.vue'

function insertCommentFragment(Vue) {
  console.log('创建评论区')
  if (process.env.NODE_ENV === 'production') {
    const $target = document.querySelector('.content-wrapper')

    if ($target instanceof HTMLDivElement) {
      const el = document.createElement('div')
      const CommentExtend = Vue.extend(Comment)
      const commentInstance = new CommentExtend({ el })
      $target.appendChild(commentInstance.$el)
      console.log('评论区创建成功')

      return function() {
        console.log('移除评论区')
        $target.removeChild(commentInstance.$el)
      }
    }
  }

  return null
}

export default ({ Vue, router }) => {
  let isReady = false
  let removeCommentFn = null
  const readyList = []

  function createComment() {
    if (removeCommentFn !== null) {
      return false
    }

    if (/^\/post\//.test(router.resolve(location).href)) {
      Vue.nextTick(() => {
        removeCommentFn = insertCommentFragment(Vue)
      })
    } else {
      if (typeof removeCommentFn === 'function') {
        removeCommentFn()
        removeCommentFn = null
      }
    }
  }

  router.onReady(() => {
    console.log('ready ...')
    isReady = true
    readyList.forEach(fn => fn())
  })

  router.afterEach(() => {
    console.log('after each ...')
    if (isReady) {
      createComment()
    } else {
      readyList.push(createComment)
    }
  })
}
