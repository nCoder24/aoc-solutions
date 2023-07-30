const { describe, it } = require("node:test");
const { parseInstructions } = require("../src/instruction-parser");
const assert = require("assert");

describe("parseInstructions", () => {
  it("should data list instructions objects", () => {
    const instructions = "turn on 31,760 through 655,892";
    assert.deepStrictEqual(parseInstructions(instructions), [
      { action: "turn on", start: { x: 31, y: 760 }, end: { x: 655, y: 892 } },
    ]);
  });
});
