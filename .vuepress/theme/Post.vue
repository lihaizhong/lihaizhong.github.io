<template>
  <div class="container">
    <NavBar />
    <article class="article main">
      <h1 class="title">{{ title }}</h1>
      <p v-if="summary" class="summary">{{ summary }}</p>
      <Content />
    </article>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$page.frontmatter.title;
    },
    summary() {
      return this.$page.frontmatter.summary;
    }
  }
};
</script>

<style lang="stylus" scoped>
.title {
  margin-bottom: 20px;
}

.summary {
  margin: 0 0 30px;
  padding: 5px 5px 5px 8px;
  color: #80766e;
  background: #e8e8e8;
  border-left: 3px solid #475164;
}
</style>
