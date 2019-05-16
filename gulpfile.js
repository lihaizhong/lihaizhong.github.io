const { src, dest, parallel } = require('gulp')
const ts = require('gulp-typescript')

const typescript = cb => {
  const tsProject = ts.createProject('tsconfig.json')
  tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest('dist/server'))
  cb()
}

const copy = cb => {
  src([
    'package.json',
    'server/**/*',
    'server/**/.env*',
    '!server/**/*.js',
    '!server/**/*.ts'
  ]).pipe(dest('dist/server'))
  cb()
}

exports.typescript = typescript

exports.default = parallel(typescript, copy)
