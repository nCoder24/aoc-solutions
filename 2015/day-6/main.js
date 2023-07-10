const fs = require("fs");

const readInstructions = () => {
  return fs.readFileSync("./resources/instructions.txt", "utf-8");
}

const solvePartOne = (instructions) => {

}

const main = () => {
  const instructions = readInstructions();
  console.log(solvePartOne(instructions));
}

main();