#!/usr/bin/env node
const path = require('path')
const http = require('http')
const fs = require('fs')

const __root = path.resolve(__dirname, '../blog/', '_posts/')

const createTime = new Date()
const DIR_NAME = String(createTime.getTime())
const DIR_PATH = path.resolve(__root, DIR_NAME)

if (fs.existsSync(DIR_PATH)) {
  throw new Error('您创建太快了，目录名已存在！')
}

function createFile(__content_location__ = '浙江杭州') {
  fs.mkdirSync(DIR_PATH)

  const FILE_NAME = 'README.md'
  const FILE_PATH = path.resolve(DIR_PATH, FILE_NAME)

  const content = `
---
author: sky
location: ${__content_location__}
description: 
tags:
date: ${createTime.toString()}
---
`

  fs.writeFile(FILE_PATH, content.replace(/^(\r\n|\n)+/, ''), () => {
    console.log(`创建文件【${FILE_NAME}】成功!文件路径：${FILE_PATH}`)
    console.log(content)
  })
}

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

/**
 * 获取地区信息
 */
const req = http.request('http://ip.360.cn/IPShare/info', options, res => {
  console.log(`状态码：${res.statusCode}`)
  console.log(`响应头：${JSON.stringify(res.headers, null, 2)}`)
  res.setEncoding('utf8')

  let result = ''
  res.on('data', chunk => {
    console.log(`响应主体：${chunk}`)
    result += chunk
  })

  res.on('end', () => {
    console.log(`数据接收完成`)
    result = JSON.parse(result)
    // 创建文件
    createFile(result.location)
  })
})

req.on('error', e => {
  createFile()
  console.error(`请求遇到问题：${e.message}`)
})

req.end()
