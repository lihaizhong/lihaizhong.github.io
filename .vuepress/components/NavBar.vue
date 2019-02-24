<template>
  <header class="nav-bar">
    <div class="fl">
      <h1 class="logo">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$siteTitle;
    }
  }
};
</script>

<style lang="stylus" scoped>
.nav-bar {
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 70px;
  background: #fff url('/light_wool.png');
  border-bottom: 1px solid $borderColor;
}

.logo {
  margin-left: 18px;
  margin-right: 18px;
}
</style>

