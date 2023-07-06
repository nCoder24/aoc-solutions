const md5 = require("md5");
const isHashStartsWithFiveZeros = (message) => md5(message).startsWith("00000");

const findSmallestSuffixNumber = (messagePrefix) => {
  let messageSuffix = 0;

  while(true) {
    messageSuffix++;

    if(isHashStartsWithFiveZeros(messagePrefix + messageSuffix)) {
      return messageSuffix;
    }
  }
};

module.exports = { findSmallestSuffixNumber };
