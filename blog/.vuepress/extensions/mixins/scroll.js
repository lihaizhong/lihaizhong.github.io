import NProgress from 'nprogress'

export default {
  data() {
    return {
      lastAvailableOffset: 0,
      height: 0,
      timer: null
    }
  },
  mounted() {
    // 需要时间渲染markdown
    window.setTimeout(() => this.addScrollListener(), 300)
  },
  beforeDestroy() {
    this.removeScrollListener()
  },
  methods: {
    addScrollListener() {
      this.height = this.$refs['main'].scrollHeight
      NProgress.configure({ minimum: 0, trickle: false, showSpinner: false })
      NProgress.start()

      this.listenScrollFn()
      window.addEventListener('scroll', this.listenScrollFn)
    },
    removeScrollListener() {
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

        if (
          offset > this.lastAvailableOffset - 50 &&
          offset < this.lastAvailableOffset + 50
        ) {
          this.timer = null
          return false
        }

        let ratio = offset / this.height
        this.lastAvailableOffset = offset
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
