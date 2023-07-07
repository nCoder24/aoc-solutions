const assert = require("assert");
const { describe, it } = require("node:test");
const {
  countNiceStrings,
  isNiceString,
  containsThreeVowels,
  containsDuplicateLetter,
  doesNotContainSpecialCombination,
} = require("../src/nice-string.js");

describe("countNiceStrings", () => {
  it("should be 0 if the list is empty", () => {
    const candidateStrings = [];

    const numOfNiceStrings = countNiceStrings(candidateStrings);

    assert.strictEqual(numOfNiceStrings, 0);
  });

  it("should be 0 if no string in the list is nice string", () => {
    const candidateStrings = ["abc", "def"];

    const numOfNiceStrings = countNiceStrings(candidateStrings);

    assert.strictEqual(numOfNiceStrings, 0);
  });

  it("should be 1 if only 1 nice string is present", () => {
    const candidateStrings = ["aaa", "def"];

    const numOfNiceStrings = countNiceStrings(candidateStrings);

    assert.strictEqual(numOfNiceStrings, 1);
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
    assert.ok(!containsDuplicateLetter(""));
  });

  it("should be false if no character is not present twice in a row", () => {
    assert.ok(!containsDuplicateLetter("abcd"));
    assert.ok(!containsDuplicateLetter("jchzalrnumimnmhp"));
  });

  it("should be true if any character is present twice in a row", () => {
    assert.ok(containsDuplicateLetter("aabc"));
  });

  it("should be false if any character is present at least twice but not adjacent", () => {
    assert.ok(!containsDuplicateLetter("abac"));
  });
});

describe("doesNotContainSpecialCombination", () => {
  it("should be true if the string is empty", () => {
    assert.ok(doesNotContainSpecialCombination(""));
  });

  it("should be false if the string contains any of the special combination", () => {
    assert.ok(!doesNotContainSpecialCombination("abjks"));
    assert.ok(!doesNotContainSpecialCombination("ajcdks"));
    assert.ok(!doesNotContainSpecialCombination("ajkaspq"));
    assert.ok(!doesNotContainSpecialCombination("ajkxyas"));
  });

  it("should be false if the string contains more than one special combination", () => {
    assert.ok(!doesNotContainSpecialCombination("abjxycdks"));
  });

  it("should be true if the string does not contain any of the special combination", () => {
    assert.ok(doesNotContainSpecialCombination("ajks"));
  });
});
