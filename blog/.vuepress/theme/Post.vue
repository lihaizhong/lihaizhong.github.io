<template>
  <div class="container">
    <!-- 导航栏 -->
    <NavBar />
    <div class="main">
      <!-- 标题 -->
      <h1 class="title">{{ title }}</h1>
      <div class="minor">
        <!-- 创建时间 -->
        <span title="创建时间">
          <i class="iconfont">&#xe60b;</i>
          {{ date | timeFormat('yyyy年MM月dd日') }}
        </span>
        <span class="only-pc">&nbsp;|</span>
        <!-- 分类 -->
        <span class="only-pc" title="分类">
          <i class="iconfont">&#xe64e;</i>
          {{ categories | arrayToString(category) }}
        </span>
        <span class="only-pc">&nbsp;|</span>
        <!-- 标签 -->
        <span class="only-pc" title="标签">
          <i class="iconfont">&#xe613;</i>
          {{ tags | arrayToString(tag) }}
        </span>
        <span>&nbsp;|</span>
        <!-- 阅读量 -->
        <span :id="pathname" :data-flag-title="title" class="leancloud-visitors" title="阅读量">
          <i class="iconfont">&#xe63b;</i>
          <span class="leancloud-visitors-count">···</span>
        </span>
      </div>
      <!-- 描述/摘要 -->
      <p v-if="description" class="description">{{ description }}</p>
      <!-- 文章 -->
      <article class="article">
        <Content />
      </article>
      <!-- 评论插件 -->
      <PostComment v-if="supportComments" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pathname() {
      return this.$page.path || "";
    },
    date() {
      return this.$frontmatter.date || "";
    },
    categories() {
      return this.$frontmatter.categories || [];
    },
    category() {
      return this.$frontmatter.category || "";
    },
    tags() {
      return this.$frontmatter.tags || [];
    },
    tag() {
      return this.$frontmatter.tag || "";
    },
    title() {
      return this.$frontmatter.title || "";
    },
    description() {
      return this.$frontmatter.description || "";
    },
    supportComments() {
      return this.$frontmatter.supportComments || true;
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
</style>
