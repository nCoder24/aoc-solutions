const fs = require("fs");
const LightGrid = require("./src/light-grid");
const BrightnessControlLightGrid = require("./src/brightness-control-light-grid");
const { parseInstructions } = require("./src/instruction-parser");

const readInstructions = () => {
  return fs.readFileSync("./resources/instructions.txt", "utf-8");
};

const solvePartOne = (instructions) => {
  const lightGrid = new LightGrid();
  const actions = {
    "turn on": (start, end) => lightGrid.turnOn(start, end),
    "turn off": (start, end) => lightGrid.turnOff(start, end),
    toggle: (start, end) => lightGrid.toggle(start, end),
  };

  instructions.forEach(({ action, start, end }) => actions[action](start, end));
  return lightGrid.countLitLights();
};

const solvePartTwo = (instructions) => {
  const lightGrid = new BrightnessControlLightGrid();
  const actions = {
    "turn on": (start, end) => lightGrid.increaseBrightness(start, end),
    "turn off": (start, end) => lightGrid.decreaseBrightness(start, end),
    toggle: (start, end) => lightGrid.increaseBrightnessByTwo(start, end),
  };

  instructions.forEach(({ action, start, end }) => actions[action](start, end));
  return lightGrid.countBrightness();
};

const main = () => {
  const instructions = parseInstructions(readInstructions());
  console.log("Part1:", solvePartOne(instructions));
  console.log("Part2:", solvePartTwo(instructions));
};

main();
