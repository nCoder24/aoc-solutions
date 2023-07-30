const fs = require("fs");
const LightGrid = require("./src/light-grid");

const readInstructions = () => {
  return fs.readFileSync("./resources/instructions.txt", "utf-8");
}

const solvePartOne = (instructions) => {
  const lightGrid = new LightGrid();
  lightGrid.execute(instructions);

  return lightGrid.countLitLights();
}

const main = () => {
  const instructions = [];
  console.log(solvePartOne(instructions));
}

main();