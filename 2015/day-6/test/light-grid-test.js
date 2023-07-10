const assert = require("assert");
const { describe, it } = require("node:test");
const LightGrid = require("../src/light-grid");

describe("LightGrid", () => {
  describe("countLitLights", () => {
    it("should be 0 initially", () => {
      const lightGrid = new LightGrid();
      assert.strictEqual(lightGrid.countLitLights(), 0);
    });
  });

  describe("execute", () => {
    it("should not configure lights on the LightGrid if no instructions are given", () => {
      const lightGrid = new LightGrid();
      const instructions = "";

      lightGrid.execute(instructions);

      assert.strictEqual(lightGrid.countLitLights(), 0);
    });
  });
});
