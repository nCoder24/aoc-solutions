const directions = {
  ">": [1, 0],
  "<": [-1, 0],
  "^": [0, 1],
  "v": [0, -1],
}

const nextHouse = (house, direction) => {
  return [
    house[0] + directions[direction][0],
    house[1] + directions[direction][1],
  ];
}

const countHouses = (instructions) => {
  const housesVisited = new Set(["1,1"]);
  let house = [1, 1];

  Array.from(instructions).forEach((direction) => {
    house = nextHouse(house, direction);
    housesVisited.add(house.join(","));
  });

  return housesVisited.size;
}
// TimeStamp: 32m

const main  = () => {
  const instructions = require("fs").readFileSync("input", "utf-8");
  console.log(countHouses(instructions));
}

main();