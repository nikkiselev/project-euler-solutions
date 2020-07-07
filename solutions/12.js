// https://projecteuler.net/problem=12

function firstTriangleNumberThatHasMoreThan500Factors() {
  for (let i = 2; true; i++) {
    const n = (i * (i + 1)) / 2

    const numberOfFactorsFor = (num) => {
      const max = Math.floor(Math.sqrt(num))
      let count = 0

      for (let j = 1; j <= max; j++) {
        if (num % j === 0) {
          count += 2
        }
      }
      return count
    }

    if (numberOfFactorsFor(n) > 500) {
      return n
    }
  }
}

console.log(firstTriangleNumberThatHasMoreThan500Factors())
