// https://projecteuler.net/problem=22

const fs = require('fs')
const path = require('path')

/**
 * Calculates worth of the word.
 *
 * @param {String} word
 * @returns {Number}
 */
function wordWorth(word) {
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  let worth = 0

  for (let i = 0; i < word.length; i++) {
    worth += alphabet.indexOf(word[i]) + 1
  }
  return worth
}

/**
 * Calculates total word scores based on position and worth.
 *
 * @param {[String]} words
 * @returns {Number}
 */

const totalWordScores = (words) =>
  words.reduce((score, word, i) => score + wordWorth(word) * (i + 1), 0)

const names = fs
  .readFileSync(path.join(__dirname, '/names.txt'), 'utf8')
  .split(',')
  .map((n) => n.substring(1, n.length - 1))
  .sort()

console.log(totalWordScores(names))
