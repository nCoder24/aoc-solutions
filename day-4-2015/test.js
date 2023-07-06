const assert = require("assert");
const { describe, it } = require("node:test");
const { findSmallestSuffixNumber } = require("./solution");

describe("findSmallestSuffixNumber", () => {
  it("should be a number results a hash with with given prefix", () => {
    const fiveZeros = "0".repeat(5);

    assert.strictEqual(findSmallestSuffixNumber("abcdef", fiveZeros), 609043);
    assert.strictEqual(findSmallestSuffixNumber("pqrstuv", fiveZeros), 1048970);
    assert.strictEqual(findSmallestSuffixNumber("yzbqklnj", fiveZeros), 282749);
  });
});
