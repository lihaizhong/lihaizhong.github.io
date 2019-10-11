/**
 * inquirer解析
 *
 * @params
 * - type: [String] 表示提问的类型，包括：input, confirm, list, rawlist, expand, checkbox, password, editor;
 * - name: [String] 存储当前问题回答的变量；
 * - message: [String|Function] 问题的描述；
 * - default: [String|Number|Array|Function] 默认值；
 * - choices: [Array|Function] 列表选项，在某些type下可用，并包含一个分隔符；
 * - validate: [Function] 对用户的回答进行校验；
 * - filter: [Function] 对用户的回答进行过滤处理，返回处理后的值；
 * - transformer: 对用户回答的显示效果进行处理（如：修改回答的字体或者背景颜色），但不会影响最终的答案的内容；
 * - when: [Function|Boolean] 根据前面问题的回答，判断当前问题是否需要被回答；
 * - pageSize: [Number] 修改某些type类型下的渲染行数；
 * - prefix: [String] 修改message默认前缀；
 * - suffix: [String] 修改message默认后缀；
 */

const path = require('path')
const fs = require('fs')

const cachePath = path.resolve(__dirname, '../.cache/cache.json')
const separator = ';'
let json = {}

try {
  const rawJSON = fs.readFileSync(cachePath)
  json = JSON.parse(rawJSON)
} catch (ex) {
  json = {}
}

exports.separator = separator

exports.questions = [
  {
    type: 'checkbox',
    name: 'tags',
    message: '请选择标签',
    choices: json.tags || [],
    pageSize: 5
  },
  {
    type: 'input',
    name: 'rawTags',
    message: '请设置其他标签(多个标签请用分号隔开)'
  },
  {
    type: 'input',
    name: 'location',
    message: '请填写地理位置'
  }
]

exports.transferTags = function(rawTag) {
  if (typeof rawTag !== 'string') {
    return ''
  }

  const tags = rawTag.split(separator)
  return tags.reduce((accumulator, value) => {
    return value === '' ? accumulator : `${accumulator}\n  - ${value}`
  }, '')
}

exports.saveTags = function(rawTag) {
  if (rawTag) {
    const tags = rawTag.split(separator)
    json.tags = (json.tags || []).concat(tags)

    try {
      fs.writeFileSync(cachePath, JSON.stringify(json))
    } catch (ex) {
      throw ex
    }
  }
}
