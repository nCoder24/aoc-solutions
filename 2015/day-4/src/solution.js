const md5 = require("md5");

const findSmallestSuffixNumber = (messagePrefix, hashPrefix) => {
  let messageSuffix = 0;

  while(true) {
    messageSuffix++;
    const message = messagePrefix + messageSuffix;
    if(md5(message).startsWith(hashPrefix)) {
      return messageSuffix;
    }
  }
};

module.exports = { findSmallestSuffixNumber };
