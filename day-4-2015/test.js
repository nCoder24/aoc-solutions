const assert = require("assert");
const {describe, it} = require("node:test");
const {findSmallestKeyNumber} = require("./solution");

describe("findSmallestKeyNumber", () => {
  it("should be 609043 if key is 'abcdef'", () => {
    assert.strictEqual(findSmallestKeyNumber("abcdef"), 609043);
  });
});