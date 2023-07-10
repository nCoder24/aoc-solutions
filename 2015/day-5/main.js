const fs = require("fs");
const { countNiceStrings, isNiceString, isProperNiceString, countProperNiceStrings } = require("./src/nice-string")

const readStringsOfSanta = () => {
  return fs.readFileSync("./resources/input.txt", "utf-8").split("\n");  
}

const main = () => {
  const stringOfSanta = readStringsOfSanta();
  console.log("Part1:", countNiceStrings(stringOfSanta));
  console.log("Part2:", countProperNiceStrings(stringOfSanta));
}

main();