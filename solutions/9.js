// https://projecteuler.net/problem=9

/**
 * Pythagorean triplet for which a + b + c equals to the given sum.
 *
 * @param {number} sum
 * @returns {number}
 */
const productOfPythagoreanTriplet = (sum) => {
  for (let a = 3; a < sum; a += 1) {
    for (let b = 4; a + b < sum; b += 1) {
      const c = sum - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
  return undefined;
};

console.log(productOfPythagoreanTriplet(1000));
