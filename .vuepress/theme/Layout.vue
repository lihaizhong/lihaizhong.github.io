<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <ul class="post-list no-list-style">
        <li
          v-for="postItem in postList"
          :key="postItem.key"
          class="post-item"
        >
          <header class="post-title">{{ postItem.frontmatter.title }}</header>
          <summary class="post-summary">{{ postItem.frontmatter.summary }}</summary>
          <footer class="post-footer clearfix">
            <div class="post-footer-left fl">
              <span><i class="iconfont">&#xe60b;</i>创建时间：{{ postItem.frontmatter.created | timeFormat }}</span> |
              <span><i class="iconfont">&#xe64e;</i>分类：{{ postItem.frontmatter.categories | arrayToString(postItem.frontmatter.category) }}</span> |
              <span><i class="iconfont">&#xe613;</i>标签：{{ postItem.frontmatter.tags | arrayToString(postItem.frontmatter.tag) }}</span>
            </div>
            <div class="fr">
              <a class="post-link" :href="postItem.path">阅读全文 &gt;&gt;</a>
            </div>
          </footer>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    arrayToString(arr, value) {
      let set = arr instanceof Array ? new Set(arr) : new Set();

      if (typeof value === "string" && value !== "") {
        set.add(value);
      }

      return Array.from(set).join(", ");
    }
  },
  computed: {
    postList() {
      return this.$site.pages.filter(
        page => page.frontmatter.layout === "Post"
      );
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

  & + & {
    margin-top: 20px;
  }

  .post-title {
    font-size: 18px;
  }

  .post-summary {
    margin: 10px 0;
    padding: 15px 0;
    border-top: 1px solid $borderColor;
    border-bottom: 1px solid $borderColor;

    &:empty {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  .post-footer {
    font-size: 12px;

    .post-footer-left {
      color: #898989;

      .iconfont {
        padding-left: 5px;
        padding-right: 5px;
      }
    }

    .post-link {
      &, &:hover, &:link {
        padding: 5px 8px;
        color: $textColor;
        text-decoration: none;
      }
    }
  }
}
</style>
