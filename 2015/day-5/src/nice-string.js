const {
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
} = require("./nice-string-rules.js");

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
};
