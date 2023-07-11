const makeGrid = (height, width, filler) =>
  new Array(height).fill().map((_) => new Array(width).fill(filler));

class LightGrid {
  #grid;

  constructor() {
    this.#grid = makeGrid(1000, 1000, false);
  }

  execute() {}
  
  countLitLights() {
    const lightsInRow = (row) => row;
    const isLit = (light) => light;

    return this.#grid.flatMap(lightsInRow).filter(isLit).length;
  }
}

module.exports = LightGrid;
