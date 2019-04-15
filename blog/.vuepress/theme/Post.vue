<template>
  <PageLayout>
    <div ref="article">
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
  </PageLayout>
</template>

<script>
import ScrollMixin from "../extensions/mixins/scroll";

export default {
  mixins: [ScrollMixin],
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
