function sumSquareDifference(n) {
  const numbers = [...Array(n + 1).keys()].slice(1);

  const sum = (a, b) => a + b;
  const sumOfSquares = numbers.map(i => i ** 2).reduce(sum, 0);
  const squareOfSum = numbers.reduce(sum, 0) ** 2;

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(10)); // should return 2640.
console.log(sumSquareDifference(20)); // should return 41230.
console.log(sumSquareDifference(100)); // should return 25164150.
