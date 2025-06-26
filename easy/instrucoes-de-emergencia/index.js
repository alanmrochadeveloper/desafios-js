import {test, withPerfBenchMark} from "./utils.js"


// INFO: this function verify if the letter in the string input occurs with the same frequency
function verifySameLetterFrequency (text) {
  if(!text) return true;
  const counterMap = new Map();
  for(let letter of text.toLowerCase()) {
    counterMap.set(letter, counterMap.get(letter) + 1 || 1);
  }
  return new Set(counterMap.values()).size === 1;
}

function verifySameLetterFrequencyV2 (text) {
  if(!text) return true;
  const lettersObj = {};
  for(let letter of text.toLowerCase()) {
    lettersObj[letter] = lettersObj[letter] + 1 || 1;
  }
  const counterSet = new Set();
  for(let key in lettersObj) {
    counterSet.add(lettersObj[key]);
  }
  return  counterSet.size === 1;
}

function authorSolution (str) {
  const charCount = {}
  for(let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1: 1;
  }
  return  Object.values(charCount).every((count, index, array)=> index !== 0 ? count === array[index-1]:true)
}

test({
  'This is Thee': true,
  "ssd": false,
  "Lorem ipsum": false,
  "QQwweerrttyy": true,
  "QQwweerrttyyy": false,
  "asd": true,
  "asasdddas": true,
  "asadddas": false
}, withPerfBenchMark(verifySameLetterFrequency))


test({
  'This is Thee': true,
  "ssd": false,
  "Lorem ipsum": false,
  "QQwweerrttyy": true,
  "QQwweerrttyyy": false,
  "asd": true,
  "asasdddas": true,
  "asadddas": false
}, withPerfBenchMark(verifySameLetterFrequencyV2))


test({
  'This is Thee': true,
  "ssd": false,
  "Lorem ipsum": false,
  "QQwweerrttyy": true,
  "QQwweerrttyyy": false,
  "asd": true,
  "asasdddas": true,
  "asadddas": false
}, withPerfBenchMark(authorSolution))
