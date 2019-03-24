const isPrime = (n) => {
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const nthPrime = (n) => {
  const primes = [];

  for (let i = 2; primes.length <= n + 2; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes.pop();
};


console.log(nthPrime(3)); // should return 13.
console.log(nthPrime(10)); // should return 29.
console.log(nthPrime(100)); // should return 541.
console.log(nthPrime(1000)); // should return 7919.
console.log(nthPrime(10001)); // should return 104743.
