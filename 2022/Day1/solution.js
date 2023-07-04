const fs = require("fs");

const solve = (input) => {
  const elves = input.trim().split(/\n\n/);
  const topThree = elves.reduce((maxCals, calories) => {
    const cals =  calories.trim().split("\n").reduce((total, cal) => {
      return total + +cal;
    }, 0);

    if (maxCals[0] < cals) {
      maxCals.unshift(cals);
      maxCals.pop();
      return maxCals;
    }

    if (maxCals[1] < cals) {
      maxCals[2] = maxCals[1];
      maxCals[1] = cals;
      return maxCals;
    }

    if (maxCals[2] < cals) {
      maxCals[2] = cals;
      return maxCals;
    }

    return maxCals;
  }, [0, 0, 0]);
  
  return topThree[0] + topThree[1] + topThree[2];
}

const main = () => {
  console.log(solve(fs.readFileSync("./input", "utf-8")));
}

main();