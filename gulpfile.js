const { src, dest, parallel } = require('gulp')
const copy = require('gulp-copy')
const ts = require('gulp-typescript')

const typescript = cb => {
  const tsProject = ts.createProject('tsconfig.json')
  tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest('dist/server'))
  cb()
}

const copyStatic = cb => {
  src(['server/**/*', 'server/**/.env*', '!server/**/*.js', '!server/**/*.ts'])
    .pipe(copy('.'))
    .pipe(dest('dist/server'))
  cb()
}

exports.typescript = typescript

exports.default = parallel(typescript, copyStatic)
