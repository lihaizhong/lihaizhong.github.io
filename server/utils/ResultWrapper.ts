export default class {
  success(data) {
    return {
      data,
      error: 1
    }
  }

  fail(message, error = 0) {
    return {
      message,
      error
    }
  }
}
