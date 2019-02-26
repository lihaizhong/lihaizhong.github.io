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
          <summary class="post-summary">{{ postItem.frontmatter.description }}</summary>
          <footer class="post-footer clearfix">
            <div class="post-footer-left fl">
              <span title="创建时间">
                <i class="iconfont">&#xe60b;</i>
                {{ postItem.frontmatter.date | timeFormat('yyyy年MM月dd日') }}
              </span>
              <span class="only-pc">&nbsp;|</span>
              <span class="only-pc" title="分类">
                <i class="iconfont">&#xe64e;</i>
                {{ postItem.frontmatter.categories | arrayToString(postItem.frontmatter.category) }}
              </span>
              <span class="only-pc">&nbsp;|</span>
              <span class="only-pc" title="标签">
                <i class="iconfont">&#xe613;</i>
                {{ postItem.frontmatter.tags | arrayToString(postItem.frontmatter.tag) }}
              </span>
            </div>
            <div class="fr">
              <a class="post-link" :href="postItem.path">阅读全文 &gt;&gt;</a>
            </div>
          </footer>
        </li>
      </ul>
      <Pagination />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postList() {
      return this.$pagination.posts;
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
