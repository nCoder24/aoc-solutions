const { describe, it } = require("node:test");
const { countVisitedHouses, countVisitedHousesWithRobo } = require("../src/day-3-solution");
const assert = require("assert");

describe("countVisitedHouses", () => {
  it("should visit 1 house(starting house) with 0 instructions", () => {
    const instructions = "";
    assert.strictEqual(countVisitedHouses(instructions), 1);
  });

  it("should visit 2 houses for any one instruction", () => {
    const instructions = "v";
    assert.strictEqual(countVisitedHouses(instructions), 2);
  });

  it("should count houses for more than one instructions", () => {
    const instructions = "^>v<";
    assert.strictEqual(countVisitedHouses(instructions), 4);
  });

  it("should count a house only once", () => {
    const instructions = "v^v^";
    assert.strictEqual(countVisitedHouses(instructions), 2);
  });
});

describe("countVisitedHousesWithRobo", () => {
  it("should visit 1 house(starting house) with 0 instructions", () => {
    const instructions = "";
    assert.strictEqual(countVisitedHousesWithRobo(instructions), 1);
  });

  it("should alter the instructions", () => {
    const instructions = "^v";
    assert.strictEqual(countVisitedHousesWithRobo(instructions), 3);
  });

  it("should count unique houses visited by both robo-santa and santa", () => {
    const instructions = "^v^v^v^v^v";
    assert.strictEqual(countVisitedHousesWithRobo(instructions), 11);
  });
});