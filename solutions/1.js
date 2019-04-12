// https://projecteuler.net/problem=1

const sumOfMultipliesOf3And5 = (limit) => {
  let sum = 0;
  for (let i = 3; i < limit; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfMultipliesOf3And5(1000));
