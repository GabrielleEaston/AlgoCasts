// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let counter = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u']
//   for (let letter of str.toLowerCase()) {
//     // if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     //   counter += 1;
//     // }
//     if (checker.includes(letter)) {
//       counter++;
//     }
//   }
//   return counter;
// }

function vowels(str) {
  const result = str.match(/[aeiou]/ig);
  return result ? result.length : 0;
}
console.log(vowels("Why do you ask?"))
module.exports = vowels;
