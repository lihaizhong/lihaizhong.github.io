#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:server

# 进入生成的文件夹
cd ./dist/server

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

packageName="blog-server.tar.gz"
projectDir="blog-server"

# 打包dist目录
tar -czvf $packageName * 

# 发布到远程服务器上
scp $(pwd)"/"$packageName root@120.77.45.219:/tmp/

# 登录并部署
ssh root@120.77.45.219 "rm -rf /home/sky/$projectDir/* && tar -zxvf /tmp/$packageName -C /home/sky/$projectDir && cd /home/sky && pm2 restart ecosystem.config.js --only blog-server --env production --update-env -n blog-server -i max && rm /tmp/$packageName && exit"

# 删除压缩包
rm $packageName

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:lihaizhong/lihaizhong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

echo "服务端发布完成"

cd -