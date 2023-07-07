const assert = require("assert");
const { describe, it } = require("node:test");
const { findSmallestSuffixNumber } = require("../src/solution");

describe("findSmallestSuffixNumber", () => {
  it("should be a number results a hash with with given prefix", () => {
    const fiveZeros = "0".repeat(5);
    const sixZeros = "0".repeat(6);

    assert.strictEqual(findSmallestSuffixNumber("abcdef", fiveZeros), 609043);
    assert.strictEqual(findSmallestSuffixNumber("pqrstuv", fiveZeros), 1048970);
    assert.strictEqual(findSmallestSuffixNumber("yzbqklnj", fiveZeros), 282749);
    
    assert.strictEqual(findSmallestSuffixNumber("yzbqklnj", sixZeros), 9962624); // May take a lot of time
  });
});
