const http = require('http');
const chalk = require('chalk');
const ora = require('ora');

const url = 'http://ip.360.cn/IPShare/info';

module.exports = function getLocation() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    const spinner = ora('正在获取当前位置').start();
    const request = http.request(url, options, (response) => {
      console.log(chalk.yellow(`状态码：${response.statusCode}`));
      console.log(
        chalk.yellow(`响应头：${JSON.stringify(response.headers, null, 2)}`)
      );
      response.setEncoding('utf8');

      let result = '';
      response.on('data', (chunk) => {
        console.log(chalk.blue(`响应主体：${chunk}`));
        result += chunk;
      });

      response.on('end', () => {
        result = result ? JSON.parse(result) : {};
        const {location} = result;

        location ?
          spinner.succeed(`当前位置：${location}`) :
          spinner.fail('获取地理位置失败');
        // 创建文件
        resolve(location);
      });
    });

    request.on('error', (e) => {
      spinner.fail('接口调用失败');
      console.log(chalk.red(`请求遇到问题：${e.message}`));
      reject(e);
    });

    request.end();
  });
};
