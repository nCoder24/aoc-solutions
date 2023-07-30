const assert = require("assert");
const { describe, it, beforeEach } = require("node:test");
const BrightnessControlLightGrid = require("../src/brightness-control-light-grid");

describe("LightGrid", () => {
  let lightGrid;

  beforeEach(() => {
    lightGrid = new BrightnessControlLightGrid();
  });

  describe("increaseBrightness", () => {
    it("should turn on all lights from start to end", () => {
      lightGrid.increaseBrightness({ x: 0, y: 0 }, { x: 0, y: 0 });
      assert.strictEqual(lightGrid.countBrightness(), 1);
    });

    it("should increase brightness of the lights from start to end", () => {
      lightGrid.increaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.increaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countBrightness(), 18);
    });
  });

  describe("decreaseBrightness", () => {
    it("should turn off all lights from start to end if brightness is 1", () => {
      lightGrid.increaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.decreaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countBrightness(), 0);
    });

    it("should decrease brightness of the lights from start to end", () => {
      lightGrid.increaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.increaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      lightGrid.decreaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countBrightness(), 9);
    });

    it("should not decrease brightness if brightness is 0", () => {
      lightGrid.decreaseBrightness({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(lightGrid.countBrightness(), 0);
    });
  });

  describe("increaseBrightnessByTwo", () => {
    it("should increase brightness all lights from start to end by two", () => {
      lightGrid.increaseBrightnessByTwo({ x: 0, y: 0 }, { x: 999, y: 999 });
      assert.strictEqual(lightGrid.countBrightness(), 2000000);
    });
  });
});
