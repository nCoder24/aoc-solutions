class BrightnessControlLightGrid {
  #grid;

  constructor() {
    this.#grid = this.#makeGrid(1000, 1000);
  }

  #makeGrid(height, width) {
    return new Array(height).fill().map(() => new Array(width).fill(0));
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

  increaseBrightness(start, end) {
    this.#getLights(start, end).forEach(({ x, y }) => {
      this.#grid[x][y]++;
    });
  }

  increaseBrightnessByTwo(start, end) {
    this.#getLights(start, end).forEach(({ x, y }) => {
      this.#grid[x][y] += 2;
    });
  }

  decreaseBrightness(start, end) {
    this.#getLights(start, end).forEach(({ x, y }) => {
      this.#grid[x][y]--;
      if (this.#grid[x][y] < 0) this.#grid[x][y] = 0;
    });
  }

  countBrightness() {
    const lightsInRow = (row) => row;
    const addBrightness = (total, brightness) => total + brightness;

    return this.#grid.flatMap(lightsInRow).reduce(addBrightness);
  }
}

module.exports = BrightnessControlLightGrid;
