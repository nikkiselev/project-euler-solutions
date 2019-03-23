function smallestMult(n) {
  const range = [...Array(n + 1).keys()].slice(1);

  let i = 1;

  const isNotEvenlyDivisible = val => i % val !== 0;

  while (range.some(isNotEvenlyDivisible)) {
    i += 1;
  }

  return i;
}

console.log(smallestMult(5)); // should return 60.
console.log(smallestMult(7)); // should return 420.
console.log(smallestMult(10)); //  should return 2520.
console.log(smallestMult(13)); // should return 360360.
console.log(smallestMult(20)); // should return 232792560.