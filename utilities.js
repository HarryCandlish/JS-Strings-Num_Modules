function getType(thing) {
  return typeof thing;
}

function isNumber(thing) {}

function toNumber(str) {}

function isStringNumber(str) {}

function add(a, b) {}

function addStrings(a, b) {}

function addStringsOrNumbers(a, b) {}

function isEmail(str) {}

function countIf(array, fn) {}

function filter(array, fn) {}

function map(array, fn) {}

function filterStringsWithCommas(str) {}

function splitStringByCommas(str) {}

module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber: isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail,
  countIf: countIf,
  filter: filter,
  map: map,
  filterStringsWithCommas: filterStringsWithCommas,
  splitStringByCommas: splitStringByCommas
};
