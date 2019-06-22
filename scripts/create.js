#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

function dateFormat(t, format) {
  if (typeof t === 'number' || typeof t === 'string') {
    t = new Date(t)
  }

  if (!isValidDate(t)) {
    return ''
  }

  const o = {
    'M+': t.getMonth() + 1, // month
    'd+': t.getDate(), // day
    'h+': t.getHours(), // hour
    'm+': t.getMinutes(), // minute
    's+': t.getSeconds(), // second
    'q+': Math.floor((t.getMonth() + 3) / 3), // quarter
    S: t.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (t.getFullYear() + '').substr(4 - RegExp.$1.length)
    )

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return format
}

const createTime = new Date()
const __root = path.resolve(__dirname, '../blog')
let dir = '_posts/'
const name = String(createTime.getTime())
const filename = `README.md`
const content = `
---
author: sky
location: Hongzhou
description: 
tags:
date: '${dateFormat(createTime, 'yyyy-MM-dd hh:mm:ss')}'
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
