// https://projecteuler.net/problem=3

const isPrime = (number) => {
  const max = Math.sqrt(number);

  for (let i = 2; i < max; i += 1) {
    if (number !== i && number % i === 0) {
      return false;
    }
  }

  return true;
};

const maxPrimeFactor = (num) => {
  let i = Math.round(Math.sqrt(num));

  while (i > 1) {
    if (num % i === 0 && isPrime(i)) {
      return i;
    }
    i -= 1;
  }

  return 0;
};

console.log(maxPrimeFactor(600851475143));
