import timeFormat from './timeFormat'
import arrayToString from './arrayToString'

const globalFilters = {
  timeFormat,
  arrayToString
}

export default function(Vue) {
  Object.keys(globalFilters).forEach(name =>
    Vue.filter(name, globalFilters[name])
  )
}
