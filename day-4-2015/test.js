const assert = require("assert");
const { describe, it } = require("node:test");
const { findSmallestSuffixNumber } = require("./solution");

describe("findSmallestSuffixNumber", () => {
  it("should be a number results a hash with at least 5 leading zeros", () => {
    assert.strictEqual(findSmallestSuffixNumber("abcdef"), 609043);
    assert.strictEqual(findSmallestSuffixNumber("pqrstuv"), 1048970);
    assert.strictEqual(findSmallestSuffixNumber("yzbqklnj"), 282749);
  });
});
