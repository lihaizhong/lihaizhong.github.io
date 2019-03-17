const {
  path,
  datatypes: { isString }
} = require('@vuepress/shared-utils')

module.exports = (options, ctx) => {
  const {
    themeAPI: { layoutComponentMap }
  } = ctx
  const isLayoutExists = name => layoutComponentMap[name] !== undefined
  const getLayout = (name, fallback) => (isLayoutExists(name) ? name : fallback)

  return {}
}
