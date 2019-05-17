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
      script: 'serve',
      args: '--spa index.html ',
      output: '/home/logs/blog_access.log',
      error: '/home/logs/blog_error.log',
      env: {
        PM2_SERVE_PATH: 'dist/client/',
        PM2_SERVE_PORT: 8080
      }
    }
  ],
  deploy: {
    production: {
      key: '~/.ssh/host_ecs',
      user: 'root',
      host: '120.77.45.219',
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/wechat',
      repo: 'git@github.com:lihaizhong/lihaizhong.github.io.git',
      path: '/home/www/app',
      'pre-deploy': '',
      'post-deploy':
        'npm install --save-prod && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
