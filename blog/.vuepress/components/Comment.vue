<template>
  <div ref="vcomments" id="vcomments" class="comments"></div>
</template>

<script>
  const APP_ID = "RysmYMCCri7UDgGWuIygKhnh-gzGzoHsz";
  const APP_KEY = "3Wf0nNASeTACEIqxqoXhHojI";

  export default {
    name: "Comment",
    mounted() {
      this.$nextTick(
        () => process.env.NODE_ENV === "production" && this.createComment()
      );
    },
    methods: {
      createComment() {
        if (typeof window !== "undefined") {
          Promise.all([import("valine"), import("leancloud-storage/live-query")])
            .then(collection => {
              const Valine = collection[0].default;

              window.AV = collection[1].default;
              new Valine({
                el: "#vcomments",
                appId: APP_ID,
                appKey: APP_KEY,
                avatar: "retro",
                placeholder: "欢迎留言与我分享您的想法...",
                visitor: true
              });
            })
            .catch(() => {
              const $comment = this.$refs["vcomments"];
              $comment.style.cssText = "color: #bf3553; text-align: center;";
              $comment.innerText = "加载评论失败";
            });
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .comments {
    margin-top: 20px;
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

