// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const cleanStrA = cleanString(stringA);
//   const cleanStrB = cleanString(stringB);

//   return cleanStrA == cleanStrB;
// }
// function cleanString(str) {
//   return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
// }
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    // console.log(`a: ${aCharMap[char]}`);
    // console.log("---------------")
    // console.log(`b: ${bCharMap[char]}`);
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}
function buildCharMap(str) {
  const charMap = {};
  const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
  for (let char of cleanStr) {
    charMap[char] =  charMap[char] + 1 || 1
    
  }
  return charMap;
}
// console.log(cleanString("fairy tales"))
//console.log(buildCharMap("hello"))
console.log(anagrams("RAIL! SAFETY!", "fairy tales"))
module.exports = anagrams;
