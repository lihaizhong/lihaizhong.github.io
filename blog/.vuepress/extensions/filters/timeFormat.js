function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

export default function(t, format = 'yyyy-MM-dd hh:mm:ss') {
  if (typeof t === 'number' || typeof t === 'string') {
    t = new Date(t)
  }

  if (!isValidDate(t)) {
    return ''
  }

  const o = {
    'M+': t.getMonth() + 1, // month
    'd+': t.getDate(), // day
    'h+': t.getHours(), // hour
    'm+': t.getMinutes(), // minute
    's+': t.getSeconds(), // second
    'q+': Math.floor((t.getMonth() + 3) / 3), // quarter
    S: t.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (t.getFullYear() + '').substr(4 - RegExp.$1.length)
    )

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return format
}
