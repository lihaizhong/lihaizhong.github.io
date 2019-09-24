#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const {
  separator,
  questions,
  transferTags,
  saveTags,
} = require('./utils/question');
const config = require('./utils/config');
const getLocation = require('./utils/getLocation');

const prompt = inquirer.createPromptModule();

/**
 * 创建博客文件
 * @param {*} dirPath 文件夹路径
 * @param {*} contentLocation 地理位置
 * @param {*} createTime 创建时间
 * @param {*} answer 所有问题的答案
 */
function createFile(dirPath, contentLocation, createTime, answer) {
  const FILE_NAME = 'README.md';
  const FILE_PATH = path.resolve(dirPath, FILE_NAME);
  const tags = transferTags(
    answer.tags.join(separator) + separator + answer.rawTags
  );

  const content = `
---
author: sky
location: ${contentLocation}
tags: ${tags}
date: ${createTime}
---
`;

  fs.mkdirSync(dirPath);

  fs.writeFile(FILE_PATH, content.replace(/^(\r\n|\n)+/, ''), () => {
    saveTags(answer.rawTags);
    console.log(
      chalk.green(`创建文件【${FILE_NAME}】成功!文件路径：${FILE_PATH}`)
    );
    console.log(chalk.magenta(content));
  });
}

/**
 * 启动器
 */
function bootstrap() {
  // 获取地理位置
  getLocation()
    .then((location) => {
      const index = questions.findIndex(({name}) => name === 'location');
      questions.splice(index, 1);
      return {location, questions};
    })
    .catch((error) => {
      console.error(error);
      return {questions};
    })
    .then((data) => {
      const {questions, location} = data;

      prompt(questions)
        .then((answer) => {
          const createTime = new Date();
          const DIR_NAME = String(createTime.getTime());
          const DIR_PATH = path.resolve(config.root, DIR_NAME);

          if (fs.existsSync(DIR_PATH)) {
            throw new Error('您创建太快了，目录名已存在！');
          }

          createFile(
            DIR_PATH,
            location || answer.location,
            createTime.toString(),
            answer
          );
        })
        .catch((error) => {
          console.log(chalk.red(error));
        });
    });
}

bootstrap();
