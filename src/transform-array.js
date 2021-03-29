const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw "error";
  }
  const newArr = [];
  const commands = [
    "--double-prev",
    "--double-next",
    "--discard-next",
    "--discard-prev",
  ];
  const discarded = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!commands.includes(item)) {
      const current = checkCurrent(arr, i, discarded);
      if (current !== undefined) {
        newArr.push(current);
      }
      continue;
    }
    if (item === "--double-prev") {
      const prev = getPrev(arr, i, discarded);
      if (prev === undefined) {
        continue;
      }
      newArr.push(prev);
    }
    if (item === "--discard-prev") {
      const prev = getPrev(arr, i, discarded);
      if (prev === undefined) {
        continue;
      }
      discarded.push(i - 1);
      newArr.pop();
    }
    if (item === "--double-next") {
      const next = getNext(arr, i, discarded);
      if (next === undefined) {
        continue;
      }
      newArr.push(next);
    }
    if (item === "--discard-next") {
      const next = getNext(arr, i, discarded);
      if (next === undefined) {
        continue;
      }
      discarded.push(i + 1);
      continue;
    }
  }
  return newArr;
};
function getNext(arr, i, discarded) {
  if (discarded.includes(i + 1)) {
    return undefined;
  }
  return arr[i + 1];
}
function getPrev(arr, i, discarded) {
  if (discarded.includes(i - 1)) {
    return undefined;
  }
  return arr[i - 1];
}
function checkCurrent(arr, i, discarded) {
  if (discarded.includes(i)) {
    return undefined;
  }
  return arr[i];
}
