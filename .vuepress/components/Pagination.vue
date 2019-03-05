<template>
  <div class="pagination">
    <ul class="no-list-style clearfix">
      <li
        :class="{ 'page--disabled': !hasPrev }"
        class="page fl"
        @click="onHandlePrev"
      ><i class="iconfont">&#xe62f;</i></li>
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
      ><i class="iconfont">&#xe62d;</i></li>
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

      if (size <= 5) {
        pages = this.pages;
      } else {
        console.warn("【TODO】暂不支持6页以上的分页，需优化！");

        if (currentIndex <= 2) {
          pages = [
            ...this.pages.slice(0, 3),
            null,
            ...this.pages.slice(size - 2, size)
          ];
        } else if (currentIndex >= size - 3) {
          pages = [
            ...this.pages.slice(0, 2),
            null,
            ...this.pages.slice(size - 3, size)
          ];
        } else {
          pages = [
            ...this.pages.slice(0, 2),
            null,
            this.pages[currentIndex],
            null,
            this.pages.slice(size - 2, size)
          ];
        }
      }

      return pages.map((page, index) => {
        page["__page__"] = index;

        page["__active__"] = index === currentIndex;

        return page;
      });
    }
  },
  methods: {
    onHandlePrev() {
      if (this.hasPrev) {
        this.$router.push(this.$pagination.prevLink);
      }
    },
    onHandleNext() {
      if (this.hasNext) {
        this.$router.push(this.$pagination.nextLink);
      }
    },
    onHandlePage(page) {
      if (this.$pagination.paginationIndex !== page) {
        this.$router.push(this.pages[page].path);
      }
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
