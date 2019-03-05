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
        <span class="only-pc" title="分类">
          <i class="iconfont">&#xe64e;</i>
          {{ categories | arrayToString(category) }}
        </span>
        <span class="only-pc">&nbsp;|</span>
        <span class="only-pc" title="标签">
          <i class="iconfont">&#xe613;</i>
          {{ tags | arrayToString(tag) }}
        </span>
        <span>&nbsp;|</span>
        <span class="leancloud-visitors" :id="pathname" :data-flag-title="title">
          <i class="iconfont">&#xe63b;</i>
          <span class="leancloud-visitors-count"></span>
        </span>
      </div>
      <p v-if="description" class="description">{{ description }}</p>
      <article class="article">
        <Content />
      </article>
      <!-- 评论插件 -->
      <div id="vcomments" class="comments"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pathname() {
      return this.$page.path;
    },
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
    supportComments() {
      return this.$frontmatter.supportComments;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if ((!from || to.path !== from.path) && this.supportComments) {
          setTimeout(() => this.createValine(), 300);
        }
      }
    }
  },
  methods: {
    createValine() {
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
  padding: 10px;
  color: #80766e;
  background: #e8e8e8;
  border-left: 5px solid #475164;
}

.article {
  margin-bottom: 100px;
}

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
