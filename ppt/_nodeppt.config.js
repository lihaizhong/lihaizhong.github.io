const path = require('path')
const glob = require('glob')

function getAllPPTPages() {
  const files = glob.sync('./ppt/!(README).md')

  if (files instanceof Array) {
    return files.reduce((accumulator, currentValue) => {
      const fileName = currentValue.match(/(?<=[\/|\\])[^\/|\\]+?(?=\.md)/)[0]
      const filePath = path.resolve(__dirname, currentValue)

      console.log(fileName, filePath)
      accumulator[fileName] = filePath
    }, {})
  }

  return null
}

module.exports = {
  pages: getAllPPTPages()
}
