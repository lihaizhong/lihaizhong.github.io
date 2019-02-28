<template>
  <div class="pagination">
    <ul class="no-list-style clearfix">
      <li
        :class="{ 'page--disabled': !hasPrev }"
        class="page fl"
        @click="onHandlePrev"
      >&lt;&lt;</li>
      <template
        v-for="(page, pageIndex) in displayPages"
      >
        <li
          v-if="page === null"
          :key="pageIndex"
          class="page fl"
        >...</li>
        <li
          v-else
          :key="page.path"
          :class="{ 'page--active': page.__active__ }"
          class="page fl"
          @click="onHandlePage(page.__page__)"
        >{{ page.__page__ + 1 }}</li>
      </template>
      <li
        :class="{ 'page--disabled': !hasNext }"
        class="page fl"
        @click="onHandleNext"
      >&gt;&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    hasPrev() {
      return this.$pagination.hasPrev;
    },
    hasNext() {
      return this.$pagination.hasNext;
    },
    pages() {
      return this.$pagination._paginationPages;
    },
    displayPages() {
      let pages = [];
      const size = this.$pagination.length;
      const currentIndex = this.$pagination.paginationIndex;

      if (size <= 7) {
        pages = this.pages.map((p, index) => {
          const page = Object.assign({}, p);
          page["__page__"] = index;

          page["__active__"] = index === currentIndex;

          return page;
        });
      } else {
        console.warn("【TODO】暂不支持8页以上的分页，需优化！");
      }

      return pages;
    }
  },
  methods: {
    onHandlePrev() {
      if (this.hasPrev) {
        location.href = this.$pagination.prevLink;
      }
    },
    onHandleNext() {
      if (this.hasNext) {
        location.href = this.$pagination.nextLink;
      }
    },
    onHandlePage(page) {
      location.href = this.pages[page].path;
    }
  }
};
</script>

<style lang="stylus" scoped>
.pagination {
  display: flex;
  margin: 10px 20px;
  justify-content: center;
}

.page {
  min-width: 25px;
  margin: 6px;
  padding: 3px;
  text-align: center;
  background: #fff;
  border: 1px solid $borderColor;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &.page--active, &.page--disabled {
    background: $borderColor;
  }

  &.page--disabled {
    color: #999;
  }
}
</style>
