<template>
  <PageLayout>
    <PostList>
      <PostItem
        v-for="post in postList"
        :key="post.key"
        :post="post"
      />
    </PostList>
    <Pagination />
  </PageLayout>
</template>

<script>
export default {
  computed: {
    pagination() {
      return this.$pagination || {};
    },
    postList() {
      return this.pagination.posts || [];
    }
  }
};
</script>

<style lang="stylus" scoped></style>
