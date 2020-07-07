// https://projecteuler.net/problem=4

const isPalindromic = (number) =>
  number.toString() === number.toString().split('').reverse().join('')

const largestPalindromeProduct = (n) => {
  const max = +'9'.toString().repeat(n)
  let result = 0

  for (let i = 2; i <= max; i += 1) {
    for (let j = 2; j <= max; j += 1) {
      if (isPalindromic(i * j) && i * j > result) {
        result = i * j
      }
    }
  }

  return result
}

console.log(largestPalindromeProduct(3))
