// https://projecteuler.net/problem=10

function isPrime(num) {
  const max = Math.sqrt(num);

  for (let i = 2; i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfAllPrimesBelow(number) {
  let sum = 0;

  for (let i = 2; i < number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfAllPrimesBelow(2000000));
