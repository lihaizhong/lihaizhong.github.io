<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <h1 class="title">{{ title }}</h1>
      <div class="minor">
        <span title="创建时间">
          <i class="iconfont">&#xe60b;</i>
          {{ date | timeFormat('yyyy年MM月dd日') }}
        </span>
        <span class="only-pc">&nbsp;|</span>
        <span class="only-pc" title="分类">
          <i class="iconfont">&#xe64e;</i>
          {{ categories | arrayToString(category) }}
        </span>
        <span class="only-pc">&nbsp;|</span>
        <span class="only-pc" title="标签">
          <i class="iconfont">&#xe613;</i>
          {{ tags | arrayToString(tag) }}
        </span>
      </div>
      <p v-if="description" class="description">{{ description }}</p>
      <article class="article">
        <Content />
      </article>
      <div v-if="showComments" id="vcomments" class="comments"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      return this.$page.frontmatter.date;
    },
    categories() {
      return this.$page.frontmatter.categories;
    },
    category() {
      return this.$page.frontmatter.category;
    },
    tags() {
      return this.$page.frontmatter.tags;
    },
    tag() {
      return this.$page.frontmatter.tag;
    },
    title() {
      return this.$page.frontmatter.title;
    },
    description() {
      return this.$page.frontmatter.description;
    },
    showComments() {
      return typeof window !== "undefined"
        ? window.screen.availWidth > this.$screenPointBreak
        : false;
    }
  },
  mounted() {
    if (this.showComments) {
      this.$nextTick(() => {
        this.createValine();
      });
    }
  },
  methods: {
    createValine() {
      if (typeof window !== "undefined") {
        Promise.all([import("valine"), import("leancloud-storage")]).then(
          LC => {
            const Valine = LC[0].default;
            if (!window.AV) {
              window.AV = LC[1].default;
            }

            new Valine({
              el: "#vcomments",
              appId: "RysmYMCCri7UDgGWuIygKhnh-gzGzoHsz",
              appKey: "3Wf0nNASeTACEIqxqoXhHojI",
              avatar: "retro",
              notify: false,
              verify: false,
              placeholder: "欢迎留言与我分享您的想法...",
              visitor: true
            });
          }
        );
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.title {
  margin-bottom: 15px;
  font-weight: normal;
}

.minor {
  padding-bottom: 5px;
  color: #898989;
  border-bottom: 1px solid $borderColor;

  .iconfont {
    padding-left: 3px;
    padding-right: 1px;
  }
}

.description {
  margin: 40px 0;
  padding: 10px 10px 10px 7px;
  color: #80766e;
  background: #e8e8e8;
  border-left: 3px solid #475164;
}

.comments {
  margin-top: 100px;
  background: #fff;
}
</style>
