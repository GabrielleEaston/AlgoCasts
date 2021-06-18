// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//parseInt
//Math.sign
//toString
function reverseInt(n) {
  const rev = n.toString().split('').reverse().join('');
  // if (n < 0) {
  //   return parseInt(rev) * -1;
  // }
  return parseInt(rev) * Math.sign(n);
}
console.log(reverseInt(500));
module.exports = reverseInt;
