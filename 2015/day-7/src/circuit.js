const gates = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: (x) => ~x,
  LSHIFT: (x, bits) => x << bits,
  RSHIFT: (x, bits) => x >> bits,
};

class Circuit {
  #wires;

  constructor() {
    this.#wires = new Map();
  }

  connect(wires, gate, to) {
    wires.set(to, gates[gate](...wires));
  }

  provide(wireID, signal) {
    this.#wires.set(wireID, signal);
  }

  getSignal(wireID) {
    return this.#wires.get(wireID);
  }
}

module.exports = Circuit;
