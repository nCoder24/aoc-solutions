const fs = require("fs");
const { countNiceStrings, isNiceString, isProperNiceString } = require("./src/nice-string")

const readStringsOfSanta = () => {
  return fs.readFileSync("./resources/input.txt", "utf-8").split("\n");  
}

const main = () => {
  const stringOfSanta = readStringsOfSanta();
  console.log("Part1:", countNiceStrings(stringOfSanta, isNiceString));
  console.log("Part2:", countNiceStrings(stringOfSanta, isProperNiceString));
}

main();