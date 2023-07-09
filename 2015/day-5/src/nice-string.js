const VOWEL = /[aeiou]/g;
const CONSECUTIVE_IDENTICAL_LETTER = /([a-z])\1/;

const containsThreeVowels = (string) => {
  const vowelsPresentInString = string.match(VOWEL) || [];
  return vowelsPresentInString.length >= 3;
};

const containsConsecutiveIdenticalLetters = (string) =>  {
  return CONSECUTIVE_IDENTICAL_LETTER.test(string);
}

const doesNotContainSpecialCombination = (string) => {
  return ["ab", "cd", "pq", "xy"].every((combination) => !string.includes(combination));
}

const isNiceString = (string) =>
  containsThreeVowels(string) &&
  containsConsecutiveIdenticalLetters(string) &&
  doesNotContainSpecialCombination(string);

const countNiceStrings = (candidateStrings) => {
  return candidateStrings.filter(isNiceString).length;
};

module.exports = {
  countNiceStrings,
  isNiceString,
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
};
