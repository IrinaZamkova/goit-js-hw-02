"use strict";
const findLongestWord = function (string) {
  let words = string.split(" ");
  let LongestWord = words[0];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > LongestWord.length) {
      LongestWord = words[i];
    }
  }
  return LongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
