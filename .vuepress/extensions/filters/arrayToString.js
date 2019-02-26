export default function(arr, value) {
  let set = arr instanceof Array ? new Set(arr) : new Set()

  if (typeof value === 'string' && value !== '') {
    set.add(value)
  }

  return Array.from(set).join(', ')
}
