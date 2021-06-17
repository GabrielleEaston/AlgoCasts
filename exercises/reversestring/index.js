// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//O(n)
// function reverse(str) {
//   let reversed = '';
//   for (i = 0; i < str.length; i += 1){
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }
// console.log(reverse("Apple!"))

// function reverse(str) {
//   return str.split('').reverse().join('')
// }
// console.log(reverse("Apple!"))

// function reverse(str) {
//   let reversed = '';
  
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
// console.log(reverse("Apple!"))

function reverse(str) {
  return str.split('').reduce((reversed, character) =>
    character + reversed
    , '');
}
console.log(reverse("Apple!"))





module.exports = reverse;
