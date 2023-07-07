const directions = {
  ">": [1, 0],
  "<": [-1, 0],
  "^": [0, 1],
  v: [0, -1],
};

const nextHouse = (house, direction) => {
  return [
    house[0] + directions[direction][0],
    house[1] + directions[direction][1],
  ];
};

const isEven = (number) => {
  return number % 2 === 0;
};

const countVisitedHouses = (instructions) => {
  const housesVisited = new Set(["1,1"]);
  let santaLocation = [1, 1];

  Array.from(instructions).forEach((direction) => {
    santaLocation = nextHouse(santaLocation, direction);
    housesVisited.add(santaLocation.join(","));
  });

  return housesVisited.size;
};
// TimeStamp: 32m

// Part - 2
const countVisitedHousesWithRobo = (instructions) => {
  const housesVisited = new Set(["1,1"]);

  let houseToMoveFrom = [1, 1];
  let nextHouseToMoveFrom = [1, 1];

  Array.from(instructions).forEach((direction) => {
    const house = nextHouse(houseToMoveFrom, direction);
    housesVisited.add(house.join(","));

    houseToMoveFrom = nextHouseToMoveFrom;
    nextHouseToMoveFrom = house;
  });

  return housesVisited.size;
};

module.exports = { countVisitedHouses, countVisitedHousesWithRobo };
