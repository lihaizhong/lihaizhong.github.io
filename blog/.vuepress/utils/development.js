function resolveArgsStyle(color, ...args) {
  if (args instanceof Array) {
    const typeStyle = `
      margin-right: 8px;
      padding: 2px 3px;
      color: #fff;
      background: ${color};
      border-radius: 3px;
    `
    const textStyle = `
      padding: 2px 3px;
      background: #fbecde;
      color: ${color};
      border-radius: 2px;
    `
    const type = args.shift()
    let isPrimitiveType = true
    args.forEach(arg => {
      switch (typeof arg) {
        case 'string':
        case 'number':
        case 'null':
        case 'undefined':
          isPrimitiveType = true
          break
        default:
          isPrimitiveType = false
      }
    })

    return isPrimitiveType
      ? [`%c${type}%c${args.join(' #$$# ')}`, typeStyle, textStyle]
      : [`%c${type}`, typeStyle, ...args]
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
  const resolveArgs = resolveArgsStyle('#158bb8', 'DEBUG', ...args)
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
