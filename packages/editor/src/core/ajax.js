export default function request(url, options) {
  return fetch(url, options).then(response => {
    if (response.ok) {
      return response
    } else {
      throw response
    }
  })
}
