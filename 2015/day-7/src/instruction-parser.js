const instructionPattern = /(.+) (.*) (.*) -> (.+)/;

const parseInstruction = (rawInstruction) => {
  const [_, wire1, gate, wire2, to] = rawInstruction.match(instructionPattern);
  return {
    wires: [wire1, wire2],
    gate,
    to,
  };
};

const parseInstructions = (rawInstructions) =>
  rawInstructions.trim().split("\n").map(parseInstruction);

module.exports = { parseInstruction };
