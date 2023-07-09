const assert = require("assert");
const { describe, it } = require("node:test");
const {
  countNiceStrings,
  isNiceString,
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
} = require("../src/nice-string.js");

describe("countNiceStrings", () => {
  it("should be 0 if the list is empty", () => {
    const candidateStrings = [];

    const numOfNiceStrings = countNiceStrings(candidateStrings);

    assert.strictEqual(numOfNiceStrings, 0);
  });

  it("should be 0 if no string in the list is a nice string", () => {
    const candidateStrings = ["abc", "def"];

    const numOfNiceStrings = countNiceStrings(candidateStrings);

    assert.strictEqual(numOfNiceStrings, 0);
  });

  it("should be the number of nice strings present in the string", () => {
    const candidateStrings = ["aaa", "def", "ugknbfddgicrmopn"];

    const numOfNiceStrings = countNiceStrings(candidateStrings);

    assert.strictEqual(numOfNiceStrings, 2);
  });
});

describe("isNiceString", () => {
  it("should be false if string is empty", () => {
    assert.ok(!isNiceString(""));
  });

  it("should be false if string don't have any of the properties required", () => {
    assert.ok(!isNiceString("xyz"));
  });

  it("should be false if string don't have all of the properties required", () => {
    assert.ok(!isNiceString("haegwjzuvuyypxyu"));
    assert.ok(!isNiceString("jchzalrnumimnmhp"));
    assert.ok(!isNiceString("dvszwmarrgswjxmb"));
  });

  it("should be true if string has all the properties", () => {
    assert.ok(isNiceString("ugknbfddgicrmopn"));
  });

  it("should be true if string has all the properties but overlapping", () => {
    assert.ok(isNiceString("aaa"));
  });
});

describe("containsThreeVowels", () => {
  it("should be false if string is empty", () => {
    assert.ok(!containsThreeVowels(""));
  });

  it("should be false if string does not contain any vowel", () => {
    assert.ok(!containsThreeVowels("xyz"));
  });

  it("should be false if string contains less than three vowels", () => {
    assert.ok(!containsThreeVowels("abc"));
    assert.ok(!containsThreeVowels("aab"));
  });

  it("should be true if string contains three vowels", () => {
    assert.ok(containsThreeVowels("aou"));
  });

  it("should be true if string contains more than three vowels", () => {
    assert.ok(containsThreeVowels("aeiou"));
  });

  it("should be true if string contains three or more vowels combined with consonants", () => {
    assert.ok(containsThreeVowels("abezioux"));
  });
});

describe("containsDuplicateLetter", () => {
  it("should be false if string is empty", () => {
    assert.ok(!containsConsecutiveIdenticalLetters(""));
  });

  it("should be false if no consecutive identical characters are present", () => {
    assert.ok(!containsConsecutiveIdenticalLetters("abcd"));
    assert.ok(!containsConsecutiveIdenticalLetters("jchzalrnumimnmhp"));
  });

  it("should be true if consecutive identical characters are present", () => {
    assert.ok(containsConsecutiveIdenticalLetters("aabc"));
  });

  it("should be false if any identical characters are present but not consecutive", () => {
    assert.ok(!containsConsecutiveIdenticalLetters("abac"));
  });
});

describe("doesNotContainSpecialCombination", () => {
  it("should be true if the string is empty", () => {
    assert.ok(doesNotContainSpecialCombination(""));
  });
  
  it("should be false if the string contains one or more special combination", () => {
    assert.ok(!doesNotContainSpecialCombination("abjks"));
    assert.ok(!doesNotContainSpecialCombination("ajcdks"));
    assert.ok(!doesNotContainSpecialCombination("ajkaspq"));
    assert.ok(!doesNotContainSpecialCombination("ajkxyas"));
    assert.ok(!doesNotContainSpecialCombination("abjxycdks"));
  });

  it("should be true if the string doesn't contain any of the special combination", () => {
    assert.ok(doesNotContainSpecialCombination("ajks"));
  });
});
