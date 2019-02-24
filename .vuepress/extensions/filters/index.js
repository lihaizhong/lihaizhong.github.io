import timeFormat from './timeFormat'

const globalFilters = {
  timeFormat
}

export default function(Vue) {
  Object.keys(globalFilters).forEach(name =>
    Vue.filter(name, globalFilters[name])
  )
}
