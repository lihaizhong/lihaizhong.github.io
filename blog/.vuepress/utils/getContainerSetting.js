const containersOptions = [
  {
    type: 'quote',
    before: '<div class="quote custom-block">',
    after: '</div>'
  },
  {
    type: 'tip',
    defaultTitle: '提示'
  },
  {
    type: 'warning',
    defaultTitle: '注意'
  },
  {
    type: 'danger',
    defaultTitle: '危险'
  }
]

module.exports = function getContainersSetting() {
  return containersOptions.map(item => ['container', item])
}
