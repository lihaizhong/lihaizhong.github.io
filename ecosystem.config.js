const path = require('path')

module.exports = {
  apps: [
    {
      name: 'app',
      script: 'dist/server/index.js',
      output: '/home/logs/app_access.log',
      error: '/home/logs/app_error.log',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'blog',
      script: path.resolve(__dirname, './node_modules/serve/bin/serve.js'),
      args: ['-p 8080 -s dist/client'],
      output: '/home/logs/blog_access.log',
      error: '/home/logs/blog_error.log'
    }
  ],
  deploy: {
    production: {
      key: '~/.ssh/host_ecs',
      user: 'root',
      host: '120.77.45.219',
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/post',
      repo: 'git@github.com:lihaizhong/lihaizhong.github.io.git',
      path: '/home/www/app',
      'pre-deploy': 'git checkout . && git fetch --all',
      'post-deploy':
        'npm install && npm run build:blog && pm2 startOrRestart ecosystem.config.js --env production --only blog'
    }
  }
}
