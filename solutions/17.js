// https://projecteuler.net/problem=17

/**
 * Convert a given number to a word.
 * 
 * @param {Number} number 
 * @returns {String}
 */
function numberToWords(number) {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
  };

  /**
   * Convert 2 digit number to word.
   * @returns {String}
   */
  function twoDigitNumberToWord(num) {
    const firstNumber = numbers[`${num[0]}0`];
    return num[1] === '0' ? firstNumber : firstNumber + numberToWords(num[1]);
  }

  /**
   * Convert 3 digit number to word.
   * @returns {String}
   */
  function threeDigitNumberToWord(num) {
    const firstNumber = numberToWords(num[0]) + numbers[100];

    if (num[1] === '0' && num[2] === '0') {
      return firstNumber;
    }

    return `${firstNumber}and${numberToWords(num[1] + num[2])}`; 
  }

  /**
   * Convert 4 digit number to word.
   * @returns {String}
   */
  const fourDigitNumberToWord = num => numberToWords(num[0]) + numbers[num];

  let num = Number.parseInt(number, 10);

  if (num < 20) {
    return numbers[num];
  }

  num = num.toString(10);

  const digitsInNumber = {
    2: twoDigitNumberToWord,
    3: threeDigitNumberToWord,
    4: fourDigitNumberToWord,
  };

  return digitsInNumber[num.length](num);
}


/**
 * 
 * @param {Number} from 
 * @param {Number} to 
 * @returns {[String]}
 */
function numbersInWords(from, to) {

  /**
   * Create a range.
   * 
   * @param {Number} min 
   * @param {Number} max 
   * @returns {[Number]} result
   */
  function range(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }

    return result;
  }

  return range(from, to).map(n => numberToWords(n));
}

console.log(numbersInWords(1, 1000).join('').length);
