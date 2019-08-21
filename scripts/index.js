#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const {
  separator,
  questions,
  transferTags,
  saveTags
} = require('./utils/question')
const config = require('./utils/config')
const getLocation = require('./utils/getLocation')

const prompt = inquirer.createPromptModule()

function createFile(
  dir_path,
  __content_location__ = '浙江杭州',
  createTime,
  answer
) {
  const FILE_NAME = 'README.md'
  const FILE_PATH = path.resolve(dir_path, FILE_NAME)
  const tags = transferTags(
    answer.tags.join(separator) + separator + answer.rawTags
  )

  const content = `
---
author: sky
location: ${__content_location__}
tags: ${tags}
date: ${createTime}
---
`

  fs.mkdirSync(dir_path)

  fs.writeFile(FILE_PATH, content.replace(/^(\r\n|\n)+/, ''), () => {
    saveTags(answer.rawTags)
    console.log(`创建文件【${FILE_NAME}】成功!文件路径：${FILE_PATH}`)
    console.log(content)
  })
}

prompt(questions)
  .then(answer => {
    const createTime = new Date()
    const DIR_NAME = String(createTime.getTime())
    const DIR_PATH = path.resolve(config.root, DIR_NAME)

    if (fs.existsSync(DIR_PATH)) {
      throw new Error('您创建太快了，目录名已存在！')
    }

    getLocation().then(location => {
      createFile(DIR_PATH, location, createTime.toString(), answer)
    })
  })
  .catch(error => {
    console.error(error)
  })
