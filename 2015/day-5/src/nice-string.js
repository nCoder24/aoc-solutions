const vowel = /[aeiou]/g;
const duplicateLetter = /(.)\1/;

const containsThreeVowels = (string) => {
  const vowelsInString = string.match(vowel) || [];
  return vowelsInString.length >= 3;
};

const containsDuplicateLetter = (string) =>  {
  return duplicateLetter.test(string);
}

const doesNotContainSpecialCombination = (string) => {
  return ["ab", "cd", "pq", "xy"].every((combination) => !string.includes(combination));
}

const isNiceString = (string) =>
  containsThreeVowels(string) &&
  containsDuplicateLetter(string) &&
  doesNotContainSpecialCombination(string);

const countNiceStrings = (candidateStrings) => {
  return candidateStrings.filter(isNiceString).length;
};

module.exports = {
  countNiceStrings,
  isNiceString,
  containsThreeVowels,
  containsDuplicateLetter,
  doesNotContainSpecialCombination,
};
