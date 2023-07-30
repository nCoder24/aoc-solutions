const instructionPattern = /(.+) (\d+),(\d+) through (\d+),(\d+)/;

const parseInstruction = (rawInstruction) => {
  const [_, action, x1, y1, x2, y2] = rawInstruction
    .trim()
    .split(instructionPattern);

  return {
    action,
    start: { x: +x1, y: +y1 },
    end: { x: +x2, y: +y2 },
  };
};

const parseInstructions = (rawInstructions) => {
  return rawInstructions.trim().split("\n").map(parseInstruction);
};

module.exports = { parseInstructions };
