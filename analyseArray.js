const analyseArray = array => {
  const sum = array.reduce((a, b) => a + b, 0)
  const min = array.reduce((p, v) => p < v ? p : v)
  const max = array.reduce((p, v) => p > v ? p : v)


  return {
    average: (sum / array.length) || 0,
    min,
    max,
    length: array.length
  }
}



module.exports = analyseArray