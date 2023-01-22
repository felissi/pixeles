export const ScrollListenMixin = {
  created() {
    if (process.client) {
      // @ts-ignore
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      // @ts-ignore
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
