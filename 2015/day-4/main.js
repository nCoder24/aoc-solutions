const { findSmallestSuffixNumber } = require("./src/solution");

const main = () => {
  const fiveZeros = "0".repeat(5);
  const sixZeros = "0".repeat(6);

  console.log("Part One:", findSmallestSuffixNumber("yzbqklnj", fiveZeros));
  console.log("Part Two:", findSmallestSuffixNumber("yzbqklnj", sixZeros));
}

main();