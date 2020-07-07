// https://projecteuler.net/problem=21

/**
 * Get a sum of numbers less than n which divide evenly into n.
 * @param {Number} n
 * @returns {Number}
 */
function sumOfDivisors(n) {
  let sum = 0

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i
    }
  }

  return sum
}

/**
 * Get amicable numbers for a given number.
 * @param {Number} a
 * @returns {[]} empty if doesn't have pair
 */
function getAmicableNumbers(a) {
  const b = sumOfDivisors(a)
  const c = sumOfDivisors(b)

  return a === c && a !== b ? [b, c] : []
}

/**
 * Get sum of all amicable numbers.
 * @param {Number} max under this maximum.
 * @returns {Number}
 */
function sumOfAmicableNumbersUnder(max) {
  const numbers = []

  for (let i = 1; i < max; i++) {
    if (!numbers.includes(i)) {
      numbers.push(...getAmicableNumbers(i))
    }
  }

  return numbers.reduce((a, b) => a + b)
}

console.log(sumOfAmicableNumbersUnder(10000))
