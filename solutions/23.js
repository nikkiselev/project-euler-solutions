// https://projecteuler.net/problem=23

/**
 * Find sum of proper divisors of number n.
 *
 * @param {number}
 * @returns {number}
 */
const sumOfProperDivisors = (n) => {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i
    }
  }

  return sum
}

/**
 * Determine is the given number abundant.
 *
 * @param {number} n
 * @returns {boolean}
 */
const isAbundant = (n) => sumOfProperDivisors(n) > n

/**
 * Find all abundant numbers below the given limit.
 *
 * @param {number} max Limit
 * @returns {number[]}
 */
const allAbundantNumbers = (max) => {
  const numbers = []
  for (let i = 1; i < max; i++) {
    if (isAbundant(i)) {
      numbers.push(i)
    }
  }
  return numbers
}

/**
 * Determine is number can be written as the sum of two abundant numbers.
 *
 * @param {number} n
 * @param {number[]} abundantNumbers Abundant Numbers
 * @returns {boolean}
 */
const canBeWrittenAsTheSumOfTwoAbundantNumbers = (n, abundantNumbers) => {
  for (let j = 0; j < abundantNumbers.length; j++) {
    const diff = n - abundantNumbers[j]

    if (diff < abundantNumbers[0]) {
      return false
    }

    if (abundantNumbers.includes(diff)) {
      return true
    }
  }

  return false
}

/**
 * Sum of numbers that cannot be written as the sum of two abundant numbers.
 * @param {number[]} numbers Abundant numbers
 * @param {number} max Limit
 */
const sumOfNumbersThatCannotBeWrittenAsTheSumOfTwoAbundantNumbers = (
  numbers,
  max
) => {
  let sum = 0

  for (let i = 1; i < max; i++) {
    if (!canBeWrittenAsTheSumOfTwoAbundantNumbers(i, numbers)) {
      sum += i
    }
  }

  return sum
}

/**
 * All numbers above can be written as the sum of two abundant numbers.
 * @type {number}
 */
const limit = 28123

console.log(
  sumOfNumbersThatCannotBeWrittenAsTheSumOfTwoAbundantNumbers(
    allAbundantNumbers(limit),
    limit
  )
)
