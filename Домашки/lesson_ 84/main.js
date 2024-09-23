// Change title
const title = document.title;
let index = 0;

function animateTitle() {
  if (index < title.length) {
    document.title = title.slice(0, index + 1);
    index++;
    setTimeout(animateTitle, 250);
  }
}
animateTitle()
// ========================================================

const firstNumber = 5;
const secondNumber = 5;
// let result = null;

if (firstNumber === secondNumber) {
  var result = null;
  result = firstNumber + secondNumber;
} else {
  result = secondNumber - firstNumber;
}

console.log(result);

// function test() {
//   let foo = null
//   return foo
// }

// let foo = 123
// console.log(foo);
// console.log(test());