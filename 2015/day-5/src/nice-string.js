const {
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
  containsRepeatingPairs,
  containsIdenticalLettersSurroundingOneLetter,
} = require("./nice-string-rules.js");

// TODO: rename string/strings

const isNiceString = (string) => {
  return (
    containsThreeVowels(string) &&
    containsConsecutiveIdenticalLetters(string) &&
    doesNotContainSpecialCombination(string)
  );
};

const isProperNiceString = (string) => {
  return (
    containsRepeatingPairs(string) &&
    containsIdenticalLettersSurroundingOneLetter(string)
  );
};

const countNiceStrings = (strings) => strings.filter(isNiceString).length;
const countProperNiceStrings = (strings) => strings.filter(isProperNiceString).length;

module.exports = {
  countNiceStrings,
  isNiceString,
  isProperNiceString,
  countProperNiceStrings,
};
