const md5 = require("md5");
const isHashStartsWithFiveZeros = (message, hashPrefix) => md5(message).startsWith(hashPrefix);

const findSmallestSuffixNumber = (messagePrefix, hashPrefix) => {
  let messageSuffix = 0;

  while(true) {
    messageSuffix++;

    const message = messagePrefix + messageSuffix;
    if(isHashStartsWithFiveZeros(message, hashPrefix)) {
      return messageSuffix;
    }
  }
};

module.exports = { findSmallestSuffixNumber };
