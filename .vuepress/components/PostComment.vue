<template>
  <div id="vcomments" class="comments"></div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => this.createComment());
  },
  methods: {
    createComment() {
      if (typeof window !== "undefined") {
        Promise.all([
          import("valine"),
          import("leancloud-storage/live-query")
        ]).then(collection => {
          const Valine = collection[0].default;

          window.AV = collection[1].default;
          new Valine({
            el: "#vcomments",
            appId: "RysmYMCCri7UDgGWuIygKhnh-gzGzoHsz",
            appKey: "3Wf0nNASeTACEIqxqoXhHojI",
            avatar: "retro",
            placeholder: "欢迎留言与我分享您的想法...",
            visitor: true
          });
        });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.comments {
  padding: 10px;
  background: #fff;

  &:empty:before {
    content: '正在加载评论, 请稍等...';
    display: block;
    text-align: center;
    color: #999;
  }
}
</style>

