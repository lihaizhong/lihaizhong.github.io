#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const createTime = new Date()
const __root = path.resolve(__dirname, '..')
const base = '_posts'
const content = `
---
title: ''
tags:
  - ''
categories:
  - ''
summary: ''
created: '${createTime.toString()}'
---
`.replace(/^(\r\n|\n)+/, '')

const blogPath = path.resolve(__root, base, `${createTime.getTime()}.md`)

if (fs.existsSync(blogPath)) {
  throw new Error('您创建太快了，文件名已存在！')
}

fs.writeFileSync(blogPath, content)
console.log(`创建文件【${createTime.getTime()}.md】成功!`)
