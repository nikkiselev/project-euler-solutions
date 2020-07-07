// https://projecteuler.net/problem=5

const smallestMultiple = (n) => {
  const range = [...Array(n + 1).keys()].slice(1)

  let i = 1

  const isNotEvenlyDivisible = (val) => i % val !== 0

  while (range.some(isNotEvenlyDivisible)) {
    i += 1
  }

  return i
}

console.log(smallestMultiple(20))
