const fs = require("fs");


const area = (x, y) => x * y;
const perimeter = (x, y) => 2 * (x + y);
const volume = ([l, w, h]) => l * w * h;

const parseDimensions = (input) =>
  input.split("\n").map(rawDimension => 
    rawDimension.split("x").map(x => +x)
  );

const calculateSurfaceAreas = ([l, w, h]) => [
  area(l, w), 
  area(w, h), 
  area(h, l),
];

const calculateSurfacePerimeters = ([l, w, h]) => [
  perimeter(l, w), 
  perimeter(w, h), 
  perimeter(h, l),
];

// Part - 1
const requiredWrappingPaper = (boxDimension) => {
  const surfaceAreas = calculateSurfaceAreas(boxDimension);
  
  return surfaceAreas.reduce(
    (total, area) => total + area * 2, 0) + Math.min(...surfaceAreas);
};

const totalRequiredWrappingPaper = (boxDimensions) =>
  boxDimensions.reduce(
    (total, dimension) => total + requiredWrappingPaper(dimension), 0
  );
// Time Stamp: 22m

// Part - 2
const requiredRibbon = (boxDimension) => {
  const surfacePerimeters = calculateSurfacePerimeters(boxDimension);

  return (
    Math.min(...surfacePerimeters) + volume(boxDimension)
  );
}

const totalRequiredRibbon = (boxDimensions) => 
  boxDimensions.reduce(
    (total, dimension) => total + requiredRibbon(dimension), 0
  );
// Time Stamp: 1hr

const main = () => {
  const dimensions = parseDimensions(fs.readFileSync("input", "utf-8"));
  console.log(dimensions);
  console.log(totalRequiredRibbon(dimensions));
};

main();
