<template>
  <div class="pagination">
    <!-- 简单分页 -->
    <ul v-if="simple" class="no-list-style simple-page-list">
      <li
        :class="{ 'page--disabled': !hasPrev }"
        class="page"
        @click="onHandlePrev"
      ><i class="iconfont">&#xe62f;</i>上一页</li>
      <li class="page">{{ currentIndex + 1 }}</li>
      <li
        :class="{ 'page--disabled': !hasNext }"
        class="page"
        @click="onHandleNext"
      >下一页<i class="iconfont">&#xe62d;</i></li>
    </ul>
    <!-- 复杂分页 -->
    <ul v-else class="no-list-style page-list">
      <li
        :class="{ 'page--disabled': !hasPrev }"
        class="page"
        @click="onHandlePrev"
      ><i class="iconfont">&#xe62f;</i>上一页</li>
      <template
        v-for="(page, pageIndex) in displayPages"
      >
        <li
          v-if="page === null"
          :key="pageIndex"
          class="page"
        >...</li>
        <li
          v-else
          :key="page.path"
          :class="{ 'page--active': page.__active__ }"
          class="page"
          @click="onHandlePage(page.__page__)"
        >{{ page.__page__ + 1 }}</li>
      </template>
      <li
        :class="{ 'page--disabled': !hasNext }"
        class="page"
        @click="onHandleNext"
      >下一页<i class="iconfont">&#xe62d;</i></li>
    </ul>
  </div>
</template>

<script>
  import DEVICE from "../constants/device";

  export default {
    computed: {
      simple() {
        return this.$device !== DEVICE.PC;
      },
      pagination() {
        return this.$pagination || {};
      },
      hasPrev() {
        return this.pagination.hasPrev;
      },
      hasNext() {
        return this.pagination.hasNext;
      },
      currentIndex() {
        return this.pagination.paginationIndex;
      },
      pages() {
        return this.pagination._paginationPages;
      },
      simpleDisplayPages() {
        return this.pages[this.currentIndex];
      },
      displayPages() {
        let pages = [];
        const size = this.pagination.length;
        const currentIndex = this.currentIndex;

        if (size <= 5) {
          pages = this.pages;
        } else {
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
          this.$router.push(this.pagination.prevLink);
        }
      },
      onHandleNext() {
        if (this.hasNext) {
          this.$router.push(this.pagination.nextLink);
        }
      },
      onHandlePage(page) {
        if (this.currentIndex !== page) {
          this.$router.push(this.pages[page].path);
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .pagination {
    margin: 20px 0;
  }

  .page-list {
    display: flex;
    justify-content: center;
  }

  .simple-page-list {
    display: flex;
    justify-content: space-between;
  }

  .page {
    box-sizing: border-box;
    min-width: 35px;
    margin: 6px;
    padding: 3px 5px;
    text-align: center;
    background: #fff;
    border: 1px solid $borderColor;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;

    &.page--active, &.page--disabled {
      background: $borderColor;
      color: #999;
      cursor: not-allowed;
    }
  }
</style>
