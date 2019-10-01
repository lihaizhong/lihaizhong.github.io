<template>
  <div ref="vcomments" id="vcomments" class="comments"></div>
</template>

<script>
  export default {
    name: "Comment",
    mounted() {
      this.$nextTick(this.createComment.bind(this));
    },
    methods: {
      createComment() {
        const {
          appId: APP_ID,
          appKey: APP_KEY,
          placeholder = "欢迎留言与我分享您的想法..."
        } = this.$themeConfig.comment || {};

        if (typeof window !== "undefined" && APP_ID && APP_KEY) {
          Promise.all([import("valine"), import("leancloud-storage/live-query")])
            .then(collection => {
              const Valine = collection[0].default;

              window.AV = collection[1].default;
              new Valine({
                el: "#vcomments",
                appId: APP_ID,
                appKey: APP_KEY,
                avatar: "retro",
                placeholder,
                visitor: true
              });
            })
            .catch(() => {
              const $comment = this.$refs["vcomments"];
              $comment.style.cssText = "color: #bf3553; text-align: center;";
              $comment.innerText = "加载评论失败";
            });
        } else {
          this.$destroy();
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .comments {
    margin-top: 40px;
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
