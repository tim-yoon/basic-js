const CustomError = require("../extensions/custom-error");

let myChain = [];

const chain = {
  getLength() {
    return myChain.length;
  },

  addLink(value) {
    myChain.push(`~( ${value} )~`);
    return chain;
  },

  removeLink(position) {
    let pos = position - 1;

    if (pos < 0) {
      myChain = [];
      throw Error("Error");
    }
    myChain.splice(pos, 1);
    return chain;
  },

  reverseChain() {
    myChain.reverse();
    return chain;
  },

  finishChain() {
    let newValue = myChain.join("");
    myChain = [];
    return newValue.substring(1, newValue.length - 1);
  },
};

module.exports = chain;
