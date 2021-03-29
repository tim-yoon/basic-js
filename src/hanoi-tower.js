const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNum = Math.pow(2, disksNumber) - 1; //formula Hanoi

  let hours = 3600;

  let secondsNum = Math.floor(turnsNum / (turnsSpeed / hours));

  let result = {
    turns: turnsNum,
    seconds: secondsNum,
  };

  return result;
};
