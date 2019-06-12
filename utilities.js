function getType(thing) {
  return typeof thing;
}

function isNumber(thing) {
  return typeof thing === "number";
}

function toNumber(str) {
  return parseInt(str);
}

function isStringNumber(str) {
  const num = toNumber(str);
  const isNum = typeof num === "number";
  const isNotNaN = !isNaN(num);
  return isNum && isNotNaN;
}

function add(a, b) {
  return a + b;
}

function addStrings(a, b) {
  var n1 = toNumber(a);
  var n2 = toNumber(b);
  return String(n1 + n2);
}

function addStringsOrNumbers(a, b) {
  console.log(a);
  console.log(b);
  var n1 = toNumber(a);
  var n2 = toNumber(b);
  return a + b;
}

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
