<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <PostList>
        <PostItem
          v-for="post in postList"
          :key="post.key"
          :post="post"
        />
      </PostList>
      <Pagination />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postList() {
      return this.$pagination.posts || [];
    }
  }
};
</script>

<style lang="stylus" scoped></style>
