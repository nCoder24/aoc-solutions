const assert = require("assert");
const {describe, it} = require("node:test");
const {findSmallestKeyNumber} = require("./solution");

describe("findSmallestKeyNumber", () => {
  it("should be a number results a hash with at least 5 leading zeros", () => {
    assert.strictEqual(findSmallestKeyNumber("abcdef"), 609043);
    assert.strictEqual(findSmallestKeyNumber("pqrstuv"), 1048970);
  });
});