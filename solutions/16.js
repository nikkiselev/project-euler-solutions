https://projecteuler.net/problem=16

function powerDigitSum(num) {
  return BigInt(2 ** num)
    .toString(10)
    .split('')
    .reduce((a, b) => +a + +b);
}

console.log(powerDigitSum(1000));
