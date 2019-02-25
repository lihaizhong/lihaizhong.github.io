<template>
  <header class="nav-bar">
    <div class="fl">
      <a
        :href="$withBase('/')"
        class="logo-link">
        <h1 class="logo">
          <i class="iconfont">&#xe60f;</i>
          {{ title }}
        </h1>
      </a>
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

.logo-link {
  &, &:hover, &:link, &:active, &:focus {
    color: $textColor;
    text-decoration: none;
  }
}

.logo {
  margin-left: 18px;
  margin-right: 18px;
  font-size: 26px;
  font-weight: normal;
}

@media screen and (max-width: $maxWidth) {
  .nav-bar {
    height: 44px;
  }

  .logo {
    margin: 10px;
    font-size: 18px;
  }
}
</style>

