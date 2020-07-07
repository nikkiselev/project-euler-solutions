// https://projecteuler.net/problem=25

/**
 * Get index of the first term in the Fibonacci sequence to contain X digits;
 *
 * @param {number} max digits
 * @returns {number}
 */
const indexOfFirstTerm = (maxLength) => {
  let currentLength = 0
  let lastFib = BigInt(1)
  let secondLastFib = BigInt(1)

  let i = 2

  while (currentLength < maxLength) {
    i++
    const current = lastFib + secondLastFib

    currentLength = current.toString().length

    secondLastFib = lastFib
    lastFib = current
  }
  return i
}

console.log(indexOfFirstTerm(1000))
