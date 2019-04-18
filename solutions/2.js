// https://projecteuler.net/problem=2

const sumOfEvenFibonacciTerms = (max) => {
  const res = [1, 2];

  while (true) {
    const term = res[res.length - 2] + res[res.length - 1];
    if (term >= max) {
      break;
    }
    res.push(term);
  }

  return res.filter(i => i % 2 === 0).reduce((a, b) => a + b, 0);
};

console.log(sumOfEvenFibonacciTerms(4000000));
