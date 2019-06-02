// https://projecteuler.net/problem=14

/**
 * Length of Collatz sequence.
 * @param {Number} startingNum 
 * @returns {Number}
 */
function collatzChainLength(startingNum) {
  let num = startingNum;
  let count = 0;

  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count;
}

/**
 * Find the longest Collatz sequence under the given starting number.
 * 
 * @param {Number} num 
 */
function longestCollatzChain(num) {
  let max = 0;
  let maxStartingNumber = 0;

  for (let i = num; i > 1; i--) {
    const current = collatzChainLength(i);
    if (current > max) {
      max = current;
      maxStartingNumber = i;
    }
  }

  return maxStartingNumber;
}

console.log(longestCollatzChain(1000000));
