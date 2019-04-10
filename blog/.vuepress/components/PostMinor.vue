<template>
  <div class="post-minor">
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
    <span
      v-if="pathname && title"
      :id="pathname"
      :data-flag-title="title"
      class="leancloud-visitors"
      title="阅读量"
    >
      <i class="iconfont">&#xe63b;</i>
      <span class="leancloud-visitors-count">&nbsp;&nbsp;&nbsp;</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "PostMinor",
  props: {
    pathname: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    date() {
      return this.data.date || null;
    },
    categories() {
      return this.data.categories || [];
    },
    category() {
      return this.data.category || null;
    },
    tags() {
      return this.data.tags || [];
    },
    tag() {
      return this.data.tag || null;
    }
  }
};
</script>

<style lang="stylus" scoped>
.post-minor {
  .iconfont {
    padding-left: 3px;
    padding-right: 1px;
  }
}
</style>
