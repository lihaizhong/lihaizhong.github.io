<template>
  <li class="post-item">
    <header class="post-title">{{ title }}</header>
    <summary class="post-summary">{{ description }}</summary>
    <footer class="post-footer clearfix">
      <div class="post-footer-left fl">
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
    date() {
      return this.frontmatter.date || "";
    },
    categories() {
      return this.frontmatter.categories || [];
    },
    category() {
      return this.frontmatter.category || null;
    },
    tags() {
      return this.frontmatter.tags || [];
    },
    tag() {
      return this.frontmatter.tag || "";
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

      .iconfont {
        padding-left: 3px;
        padding-right: 1px;
      }
    }

    .post-link {
      &, &:hover, &:link {
        padding: 5px 8px;
        color: $textColor;
        text-decoration: none;
        user-select: none;
      }
    }
  }
}
</style>
