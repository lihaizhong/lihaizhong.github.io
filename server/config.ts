import * as path from 'path'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

function resolve(filepath = '') {
  return path.resolve(__dirname, filepath)
}

function parseEnvFile(relativeFilePath) {
  try {
    const filePath = resolve(relativeFilePath)
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
      return dotenv.parse(content)
    }

    return {}
  } catch (ex) {
    return {}
  }
}

const env = process.env.NODE_ENV || 'development'
const config = Object.assign(
  {},
  parseEnvFile('.env'),
  parseEnvFile(`.env.${env}`)
)

Object.keys(config).forEach(key => (process.env[key] = config[key]))
