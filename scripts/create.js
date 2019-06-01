#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const createTime = new Date()
const __root = path.resolve(__dirname, '../blog')
let dir = '_posts/'
const name = String(createTime.getTime())
const filename = `README.md`
const content = `
---
title: ''
description: ''
tags:
  - ''
categories:
  - ''
supportComments: true
date: '${createTime.toString()}'
---
`.replace(/^(\r\n|\n)+/, '')

const dirpath = path.resolve(__root, dir, name)

if (fs.existsSync(dirpath)) {
  throw new Error('您创建太快了，目录名已存在！')
}

fs.mkdirSync(dirpath)

const filepath = path.resolve(dirpath, `${filename}`)

fs.writeFile(filepath, content, () => {
  console.log(`创建文件【${filename}】成功!文件路径：${filepath}`)
})
