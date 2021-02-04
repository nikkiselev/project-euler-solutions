// https://projecteuler.net/problem=15

const factorial = (n) => {
  if (n < 2) {
    return 1
  }
  return n * factorial(n - 1)
}

const binomialCoefficient = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k))
}

const numberOfLatticePaths = (n, k) => {
  return binomialCoefficient(n + k, n)
}

console.log(numberOfLatticePaths(20, 20))
