const md5 = require("md5");
const isValidInput = (input) => md5(input).startsWith("00000");

const findSmallestKeyNumber = (key) => {
  let number = 0;
  while(true) {
    if(isValidInput(key + number)) return number;
    number++;
  }
};

module.exports = { findSmallestKeyNumber };
