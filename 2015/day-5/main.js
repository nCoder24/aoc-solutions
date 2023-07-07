const fs = require("fs");
const { countNiceStrings } = require("./src/nice-string")

const main = () => {
  const textFile = fs.readFileSync("./resources/input.txt", "utf-8").split("\n");
  console.log(countNiceStrings(textFile));
}

main();