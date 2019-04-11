import NProgress from 'nprogress'

export default {
  data() {
    return {
      height: 0,
      timer: null
    }
  },
  mounted() {
    // 需要时间渲染markdown
    window.setTimeout(() => this.addListenerScroll(), 300)
  },
  beforeDestroy() {
    this.removeListenerScroll()
  },
  methods: {
    addListenerScroll() {
      this.height = this.$refs['main'].scrollHeight
      NProgress.configure({ minimum: 0, trickle: false, showSpinner: false })
      NProgress.start()

      this.listenScrollFn()
      window.addEventListener('scroll', this.listenScrollFn)
    },
    removeListenerScroll() {
      NProgress.done()
      window.removeEventListener('scroll', this.listenScrollFn)
    },
    listenScrollFn() {
      if (this.timer) {
        return false
      }

      window.clearTimeout(this.timer)
      this.timer = window.setTimeout(() => {
        const offset =
          document.documentElement.scrollTop || document.body.scrollTop
        let ratio = offset / this.height

        ratio += (window.screen.availHeight * ratio) / this.height

        if (ratio >= 1) {
          ratio = 0.9999999
        }

        NProgress.set(ratio)
        this.timer = null
      }, 300)
    }
  }
}
