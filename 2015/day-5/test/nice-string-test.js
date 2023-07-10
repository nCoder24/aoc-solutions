const assert = require("assert");
const { describe, it } = require("node:test");
const {
  countNiceStrings,
  isNiceString,
  isProperNiceString,
} = require("../src/nice-string.js");

const {
  containsThreeVowels,
  containsConsecutiveIdenticalLetters,
  doesNotContainSpecialCombination,
  containsRepeatingPairs,
  containsIdenticalLettersSurroundingOneLetter,
} = require("../src/nice-string-rules.js");

describe("countNiceStrings", () => {
  it("should be 0 if the list is empty", () => {
    assert.strictEqual(countNiceStrings([], isNiceString), 0);
  });

  it("should be 0 if no string in the list is a nice string", () => {
    assert.strictEqual(countNiceStrings(["abc", "def"], isNiceString), 0);
  });

  it("should be the number of nice strings present in the string", () => {
    assert.strictEqual(countNiceStrings(["aaa", "def", "ugknbfddgicrmopn"], isNiceString), 2);
  });
});

describe("isNiceString", () => {
  it("should be false if string is empty", () => {
    assert.ok(!isNiceString(""));
  });

  it("should be false if string don't have any of the three properties required", () => {
    assert.ok(!isNiceString("xyz"));
  });

  it("should be false if string don't have all of the three properties required", () => {
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

describe("isProperNiceString", () => {
  it("should be false for empty string", () => {
    assert.ok(!isProperNiceString(""));
  });

  it("should be false if string don't have both or any of the required properties", () => {
    assert.ok(!isProperNiceString("abc"));
    assert.ok(!isProperNiceString("uurcxstgmygtbstg"));
    assert.ok(!isProperNiceString("ieodomkazucvgmuy"));
  });

  it("should be true if string have both of the required properties", () => {
    assert.ok(isProperNiceString("qjhvhtzxzqqjkmpb"));
    assert.ok(isProperNiceString("xxyxx"));
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

describe("containsRepeatingPairs", () => {
  it("should be false for empty string", () => {
    assert.ok(!containsRepeatingPairs(""));
  });

  it("should be false if string does not contain repeating pair", () => {
    assert.ok(!containsRepeatingPairs("abaa"));
    assert.ok(!containsRepeatingPairs("ieodomkazucvgmuy"));
  });

  it("should be true if string contains one a repeating immediately", () => {
    assert.ok(containsRepeatingPairs("abab"));
  });
  
  it("should be true if string contains a pair repeating after one or more letter(s)", () => {
    assert.ok(containsRepeatingPairs("abaab"));
    assert.ok(containsRepeatingPairs("abdskajlfab"));
  });
});

describe("containsIdenticalLettersSurroundingOneLetter", () => {
  it("should be false for empty string", () => {
    assert.ok(!containsIdenticalLettersSurroundingOneLetter(""));
  });

  it("should be false if the string has no repeating letter", () => {
    assert.ok(!containsIdenticalLettersSurroundingOneLetter("abc"));
  });

  it("should be false if the string has repeating letter but with no letter between", () => {
    assert.ok(!containsIdenticalLettersSurroundingOneLetter("aa"));
  });

  it("should be false if the string has repeating letter but with more than one letter between", () => {
    assert.ok(!containsIdenticalLettersSurroundingOneLetter("abba"));
  });

  it("should be true if the string has repeating letter with exactly one letter between", () => {
    assert.ok(containsIdenticalLettersSurroundingOneLetter("aba"));
    assert.ok(containsIdenticalLettersSurroundingOneLetter("xxyxx"));
    assert.ok(containsIdenticalLettersSurroundingOneLetter("qjhvhtzxzqqjkmpb"));
  });
});