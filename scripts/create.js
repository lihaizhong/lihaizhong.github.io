#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const createTime = new Date()
const __root = path.resolve(__dirname, '../docs')
const dir = '_posts'
const filename = `${createTime.getTime()}.md`
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

const filepath = path.resolve(__root, dir, `${filename}`)

if (fs.existsSync(filepath)) {
  throw new Error('您创建太快了，文件名已存在！')
}

fs.writeFile(filepath, content, () => {
  console.log(`创建文件【${filename}】成功!`)
})
