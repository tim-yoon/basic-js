const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let deleteMembers = [];

  members.forEach((t) => {
    if (typeof t === "string") {
      deleteMembers.push(t);
    }
  });

  let dreamTeam = [];

  for (let i = 0; i < deleteMembers.length; i++) {
    if (typeof deleteMembers[i] === "string") {
      dreamTeam.push(deleteMembers[i].toUpperCase().trim().substr(0, 1));
    } else {
      return false;
    }
  }
  return dreamTeam.sort().join("");
};
