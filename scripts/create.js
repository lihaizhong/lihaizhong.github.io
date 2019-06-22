#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const __root = path.resolve(__dirname, '../blog/', '_posts/')

const createTime = new Date()
const DIR_NAME = String(createTime.getTime())
const DIR_PATH = path.resolve(__root, DIR_NAME)

if (fs.existsSync(DIR_PATH)) {
  throw new Error('您创建太快了，目录名已存在！')
}

fs.mkdirSync(DIR_PATH)

const FILE_PATH = path.resolve(DIR_PATH, 'README.md')

const __content_author__ = 'sky'
const __content_location__ = 'Hangzhou'
const __content_date__ = createTime.toString()

fs.writeFile(
  FILE_PATH,
  `
  ---
  author: ${__content_author__}
  location: ${__content_location__}
  description: 
  tags:
  date: ${__content_date__}
  ---
  `.replace(/^(\r\n|\n)+/, ''),
  () => console.log(`创建文件【${filename}】成功!文件路径：${FILE_PATH}`)
)
