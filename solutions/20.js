// https://projecteuler.net/problem=20

/**
 * 
 * @param {Number} n 
 * @returns {{}}
 */
const factorial = n => (
  n <= 1 ? 1 : BigInt(n) * BigInt((n - 1)) * BigInt(factorial(n - 2))
);

/**
 * Calculates sum of digits in the given number.
 * 
 * @param {Number} n
 * @returns {Number}
 */
const digitSum = n => (
  n.toString()
    .split('')
    .reduce((a, b) => +a + +b)
);

console.log(digitSum(factorial(100)));
