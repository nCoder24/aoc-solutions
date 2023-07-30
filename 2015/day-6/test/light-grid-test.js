const assert = require("assert");
const { describe, it, beforeEach } = require("node:test");
const LightGrid = require("../src/light-grid");

describe("LightGrid", () => {
  let lightGrid;

  beforeEach(() => {
    lightGrid = new LightGrid();
  });

  describe("countLitLights", () => {
    it("should be 0 initially", () => {
      assert.strictEqual(lightGrid.countLitLights(), 0);
    });
  });

  describe("turnOn", () => {
    it("should turn on all lights from start to end", () => {
      lightGrid.turnOn({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 9);
    });

    it("should leave a light on if it's already on", () => {
      lightGrid.turnOn({ x: 1, y: 1 }, { x: 1, y: 1 });
      lightGrid.turnOn({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 9);
    });
  });

  describe("turnOff", () => {
    it("should turn off all lights from start to end", () => {
      lightGrid.turnOn({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.turnOff({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 0);
    });

    it("should leave a light off if it's already on", () => {
      lightGrid.turnOn({ x: 1, y: 1 }, { x: 1, y: 1 });
      lightGrid.turnOff({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 0);
    });
  });

  describe("toggle", () => {
    it("should turn off lights if on from start to end", () => {
      lightGrid.turnOn({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.toggle({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 0);
    });

    it("should turn on lights if off form start to end", () => {
      lightGrid.turnOff({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.toggle({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 9);
    });

    it("should toggle the lights form start to end", () => {
      lightGrid.turnOn({ x: 0, y: 0 }, { x: 1, y: 1 });
      lightGrid.toggle({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countLitLights(), 5);
    });
  });
});
