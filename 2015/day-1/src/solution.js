const fs = require("fs");

const instructionOffset = {
  "(": 1,
  ")": -1,
};

const nextFloor = (floor, instruction) => floor + instructionOffset[instruction];
const isNotBasement = (floor) => floor !== -1;

// Part - 1
const findFinalFloor = (instructions) => Array.from(instructions).reduce(nextFloor, 0);
// Time Stamp: 7.07min

// Part - 2
const findStepToBasement = (instructions) => {
  let step = 0, floor = 0;

  while(isNotBasement(floor)) {
    floor = nextFloor(floor, instructions[step]);
    step++;
  }

  return step;
}
//Time Stamp: 17.01m

module.exports = {findFinalFloor, findStepToBasement};
