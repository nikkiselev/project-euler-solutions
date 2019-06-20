// https://projecteuler.net/problem=16

const powerDigitSum = num => (
  BigInt(2 ** num)
    .toString(10)
    .split('')
    .reduce((a, b) => +a + +b)
);

console.log(powerDigitSum(1000));
