export default {
  getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = window.location.search.substr(1).match(reg)
    return r != null ? window.decodeURIComponent(r[2]) : null
  }
}
