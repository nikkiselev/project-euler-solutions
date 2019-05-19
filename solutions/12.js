// https://projecteuler.net/problem=12

function firstTriangleNumberThatHasMoreThan500Factors() {
  const numbers = [1];

  for (let i = 2; true; i++) {
    const n = numbers[numbers.length - 1] + i;
    numbers.push(n);

    const numberOfFactorsFor = (num) => {
      const max = Math.floor(Math.sqrt(num));
      let count = 0;

      for (let j = 1; j <= max; j++) {
        if (num % j === 0) {
          count += 2;
        }
      }
      return count;
    };

    if (numberOfFactorsFor(n) > 500) {
      return n;
    }
  }
}

console.log(firstTriangleNumberThatHasMoreThan500Factors());
