<template>
  <div class="container">
    <template v-if="type === 'normal'">
      <header class="header">
        <div class="header-inner">
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
        </div>
      </header>
      <main class="main">
        <slot />
      </main>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: "normal",
        validator(value) {
          return ["simple", "normal"].includes(value);
        }
      }
    },
    computed: {
      title() {
        return this.$siteTitle || "";
      }
    }
  };
</script>

<style lang="stylus" scoped>
  $headerNormalHeight = 70px;
  $headerMobileHeight = 44px;

  .container {
    max-width: $maxWidth;
    margin: 0 auto;
  }

  .header {
    height: $headerNormalHeight;
    margin-bottom: 10px;

    .header-inner {
      box-sizing: border-box;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 999;
      height: $headerNormalHeight;
      background: #fff url('https://upload.cc/i1/2019/05/17/YiTAeh.png');
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
  }

  .main {
    margin-bottom: 80px;
    border-top: 1px solid transparent;
  }

  @media screen and (max-width: $maxWidth) {
    .header {
      &, .header-inner {
        height: $headerMobileHeight;
      }
    }

    .logo {
      margin: 10px;
      font-size: 18px;
    }
  }
</style>

