const VOWEL = /[aeiou]/g;
const CONSECUTIVE_IDENTICAL_LETTER = /([a-z])\1/;
const REPEATING_PAIR = /(..).*\1/;
const SANDWICHED_LETTER = /(.).\1/;

const containsThreeVowels = (string) => {
  const vowelsPresentInString = string.match(VOWEL) || [];
  return vowelsPresentInString.length >= 3;
};

const containsConsecutiveIdenticalLetters = (string) => {
  return CONSECUTIVE_IDENTICAL_LETTER.test(string);
};

const doesNotContainSpecialCombination = (string) => {
  const specialCombinations = ["ab", "cd", "pq", "xy"];
  
  return specialCombinations.every(
    (combination) => !string.includes(combination)
  );
};

const containsRepeatingPairs = (string) => {
  return REPEATING_PAIR.test(string);
};

const containsIdenticalLettersSurroundingOneLetter = (string) => {
  return SANDWICHED_LETTER.test(string);
};

module.exports = {
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
  containsRepeatingPairs,
  containsIdenticalLettersSurroundingOneLetter,
};
