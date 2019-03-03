#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME


# 发布到远程服务器上
scp -r $(pwd) root@120.77.45.219:/home/sky/

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:lihaizhong/lihaizhong.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
