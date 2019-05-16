module.exports = {
  apps: [
    {
      name: 'app',
      script: '/home/www/app/index.js',
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
      output: '/home/logs/blog_access.log',
      error: '/home/logs/blog_error.log',
      env: {
        PM2_SERVE_PATH: '/home/www/blog',
        PM2_SERVE_PORT: 8080
      }
    }
  ],
  deploy: {
    app: {
      key: '~/.ssh/host_ecs',
      user: 'root',
      host: '120.77.45.219',
      port: 22,
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/wechat',
      repo: 'git@github.com:lihaizhong/lihaizhong.github.io.git',
      path: '/home/www/app',
      'pre-deploy':
        'git clone git@github.com:lihaizhong/lihaizhong.github.io.git',
      'post-deploy': ''
    }
  }
}
