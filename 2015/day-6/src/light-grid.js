class LightGrid {
  #grid;

  constructor() {
    this.#grid = this.#makeGrid(1000, 1000, false);
  }

  #makeGrid(height, width) {
    return new Array(height).fill().map(() => new Array(width).fill(false));
  }

  #getLights(start, end) {
    const lights = [];

    for (let x = start.x; x <= end.x; x++) {
      for (let y = start.y; y <= end.y; y++) {
        lights.push({ x, y });
      }
    }

    return lights;
  }

  turnOn(start, end) {
    this.#getLights(start, end).forEach(({ x, y }) => {
      this.#grid[x][y] = true;
    });
  }

  turnOff(start, end) {
    this.#getLights(start, end).forEach(({ x, y }) => {
      this.#grid[x][y] = false;
    });
  }

  toggle(start, end) {
    this.#getLights(start, end).forEach(({ x, y }) => {
      this.#grid[x][y] = !this.#grid[x][y];
    });
  }

  countLitLights() {
    const lightsInRow = (row) => row;
    const isLit = (light) => light;

    return this.#grid.flatMap(lightsInRow).filter(isLit).length;
  }
}

module.exports = LightGrid;
