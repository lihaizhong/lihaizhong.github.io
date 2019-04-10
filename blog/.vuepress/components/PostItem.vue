<template>
  <li class="post-item">
    <!-- 列表项头部 -->
    <header class="post-title">
      <a class="post-title-link" :href="path">{{ title }}</a>
    </header>
    <!-- 列表项摘要 -->
    <summary class="post-summary">{{ description }}</summary>
    <!-- 列表项底部 -->
    <footer class="post-footer clearfix">
      <!-- 扩展信息 -->
      <div class="post-footer-left fl">
        <PostMinor :data="minor" />
      </div>
      <div class="fr">
        <a class="post-link" :href="path">阅读全文 &gt;&gt;</a>
      </div>
    </footer>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    frontmatter() {
      return this.post.frontmatter || {};
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
    path() {
      return this.post.path || "";
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-item {
  padding: 15px;
  background: #fff;
  border: 1px solid $borderColor;
  border-radius: 5px;
  box-shadow: 2px 2px 8px $borderColor;

  & + & {
    margin-top: 20px;
  }

  .post-title {
    font-size: 18px;
  }

  .post-title-link {
    &, &:hover, &:link {
      color: $textColor;
      text-decoration: none;
      user-select: none;
    }
  }

  .post-summary {
    margin: 10px 0;
    padding: 15px;
    font-size: 14px;
    color: #555;
    border-top: 1px solid $borderColor;
    border-bottom: 1px solid $borderColor;

    &:empty {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  .post-footer {
    font-size: 14px;

    .post-footer-left {
      color: #898989;
    }

    .post-link {
      @extend .post-item .post-title-link;

      &, &:hover, &:link {
        padding: 5px 8px;
      }
    }
  }
}
</style>
