export default ({ Vue, router }) => {
  router.beforeEach((to, from, next) => {
    // if (to)
    console.log(to)
  })
}
