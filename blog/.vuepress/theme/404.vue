<template>
  <div class="container">
    <div class="not-found">
      <h1 class="title">404</h1>
      <p class="description">你是不是迷路了？</p>
      <a class="link" href="/">走，带你回家。</a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.not-found {
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  padding: 20px;
}

.description {
  padding: 0 10px;
  border-left: 5px solid $borderColor;
}

.link {
  &:hover {
    text-decoration: underline;
  }
}
</style>
