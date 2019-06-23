function resolveArgsStyle(color, ...args) {
  if (args instanceof Array) {
    const resolveArgs = []
    const tmpArgs = []
    const typeStyle = `margin-right: 8px; padding: 2px 3px; color: #fff; background: #813c85; border-radius: 3px;`
    const textStyle = `padding: 2px 3px; background: #141e1b; color: ${color}; border-radius: 2px;`
    const type = args.shift()
    args.forEach((arg, index) => {
      switch (typeof arg) {
        case 'string':
        case 'number':
        case 'null':
        case 'undefined':
          tmpArgs.push(arg)
          break
        default:
          resolveArgs.push(arg)
      }
    })

    resolveArgs.push(`%c${type}%c${tmpArgs.join(' ')}`, typeStyle, textStyle)

    return resolveArgs
  }

  return args
}

function logger(args, type, open) {
  if (process.env.NODE_ENV !== 'production' || open) {
    switch (type) {
      case 'table':
        console.table(...args)
      default:
        console.log(...args)
    }
  }
}

export function log(...args) {
  const resolveArgs = resolveArgsStyle('#66c18c', 'LOG', ...args)
  logger(resolveArgs)
}

export function debug(...args) {
  const resolveArgs = resolveArgsStyle('#fbecde', 'DEBUG', ...args)
  logger(resolveArgs)
}

export function error(...args) {
  const resolveArgs = resolveArgsStyle('#ee3f4d', 'ERROR', ...args)
  logger(resolveArgs, null, true)
}

export function table(...args) {
  logger(args, 'table')
}

export default {
  log,
  debug,
  error,
  table
}
