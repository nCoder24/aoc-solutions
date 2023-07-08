const Colony = require("./src/colony");
const House = require("./src/house");
const Instructor = require("./src/instructor");
const Santa = require("./src/santa");


const partOne = (input) => {
  const instructions = input;
  const startingHouse = new House(0, 0);
  const colony = new Colony;
  const santa = new Santa(startingHouse, colony);
  const elf = new Instructor(santa);

  elf.instruct(instructions);
  console.log(colony.visitedHouses.length);
}  

const main = () => {
  partOne("<^v>");
}

main();