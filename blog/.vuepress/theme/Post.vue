<template>
  <div class="container">
    <!-- 导航栏 -->
    <NavBar />
    <div ref="main" class="main">
      <!-- 标题 -->
      <h1 class="title">{{ title }}</h1>
      <!-- 扩展信息 -->
      <div class="minor">
        <PostMinor :pathname="pathname" :title="title" :data="minor" />
      </div>
      <!-- 描述/摘要 -->
      <p v-if="description" class="description">{{ description }}</p>
      <!-- 文章 -->
      <article class="article">
        <Content />
      </article>
    </div>
    <!-- 评论插件 -->
    <PostComment v-if="supportComments" />
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  data() {
    return {
      height: 0,
      timer: null
    };
  },
  computed: {
    frontmatter() {
      return this.$frontmatter || {};
    },
    page() {
      return this.$page || {};
    },
    pathname() {
      return this.page.path || "";
    },
    title() {
      return this.frontmatter.title || "";
    },
    description() {
      return this.frontmatter.description || "";
    },
    minor() {
      return {
        date: this.frontmatter.date,
        categories: this.frontmatter.categories,
        category: this.frontmatter.category,
        tags: this.frontmatter.tags,
        tag: this.frontmatter.tag
      };
    },
    supportComments() {
      return this.frontmatter.supportComments || true;
    }
  },
  mounted() {
    // 需要时间渲染markdown
    window.setTimeout(() => this.addListenerScroll(), 300);
  },
  beforeDestroy() {
    this.removeListenerScroll();
  },
  methods: {
    addListenerScroll() {
      this.height = this.$refs["main"].scrollHeight;
      NProgress.configure({ minimum: 0, trickle: false, showSpinner: false });
      NProgress.start();

      this.listenScrollFn();
      window.addEventListener("scroll", this.listenScrollFn);
    },
    removeListenerScroll() {
      NProgress.done();
      window.removeEventListener("scroll", this.listenScrollFn);
    },
    listenScrollFn() {
      if (this.timer) {
        return false;
      }

      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        const offset =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ratio = offset / this.height;

        ratio += (window.screen.availHeight * ratio) / this.height;

        if (ratio >= 1) {
          ratio = 0.9999999;
        }

        NProgress.set(ratio);
        this.timer = null;
      }, 300);
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
</style>
