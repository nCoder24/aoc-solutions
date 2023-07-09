const {
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
} = require("./nice-string-rules.js");

// TODO: rename string/strings

const isNiceString = (string) =>
  containsThreeVowels(string) &&
  containsConsecutiveIdenticalLetters(string) &&
  doesNotContainSpecialCombination(string);

const countNiceStrings = (strings, niceStringPredicate) => {
  return strings.filter(niceStringPredicate).length;
};

module.exports = {
  countNiceStrings,
  isNiceString,
};
