const http = require('http');
const chalk = require('chalk');

const url = 'http://ip.360.cn/IPShare/info';

module.exports = function getLocation() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    console.log(chalk.blue('正在获取当前地址'));
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
        // 创建文件
        resolve(location);
      });
    });

    request.on('error', (e) => {
      reject(e);
      console.log(chalk.red(`请求遇到问题：${e.message}`));
    });

    request.end();
  });
};
