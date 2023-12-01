const Circuit = require("./circuit");

const assembleCircuit = (instructions) => {
  const circuit = new Circuit();

  instructions.forEach((instruction) => {
    circuit.connect(wires, get, to);
  });

  return circuit.getSignal("a");
};

module.exports = { assembleCircuit };
