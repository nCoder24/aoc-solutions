const { assembleCircuit } = require("./src/solutions");

const main = () => {
  const instructions = [{}];
  console.log("Part1:", assembleCircuit(instructions));
};

main();
