// https://projecteuler.net/problem=7

const isPrime = (n) => {
  const max = Math.sqrt(n)
  for (let i = 2; i <= max; i += 1) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const nthPrime = (n) => {
  const primes = []

  for (let i = 2; primes.length <= n + 2; i += 1) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes.pop()
}

console.log(nthPrime(10001))
