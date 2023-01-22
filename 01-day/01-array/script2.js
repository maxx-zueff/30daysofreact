import './countries.js';
import './web_tech.js';

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const words = text.split(' ');

words.forEach(function (word, index) {
  if (word.indexOf('.') > -1) {
    words[index] = word.slice(0, word.length - 1);
  }
});

console.log(words);
console.log(words.length);

// ---

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

// ---

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log('min', ages[0]);
console.log('max', ages[ages.length - 1]);

function isInteger(num) {
  return num % 1 == 0;
}

let medium_age = ages.length / 2;
isInteger(medium_age)
  ? console.log("mid ",(ages[medium_age] + ages[medium_age - 1]) / 2)
  : console.log(ages[Math.trunc("mid ", medium_age)]);

let sum = 0;
ages.forEach(function(i) {
  sum = sum + i;
})

let avg = Math.round(sum/ages.length)
console.log("Средний возраст: ", Math.round(sum/ages.length))

console.log("Range ",ages[ages.length - 1] - ages[0])

let min = ages[0];
let max = ages[ages.length - 1];

console.log(
  "min-avg ",
  Math.abs((min-avg))
)

console.log(
  "max-avg ",
  Math.abs((max-avg))
)

