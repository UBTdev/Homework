// // Change title
const title = document.title;
let index = 0;

function animateTitle() {
  if (index < title.length) {
    document.title = title.slice(0, index + 1);
    index++;
    setTimeout(animateTitle, 300);
  }
}
animateTitle();



// №1
function helloUser(userName) {
  return `hello ${userName}`;
}

console.log(helloUser('L e m o n'));
// №2
let foundNumber = ''
const randomNumbers = [9 * 2, 3, 134, 547, 245682458, 445, 788, 12, 2, 567, 57, 11, 10.1];
function NumberGreaterTen(randomNumbers, foundNumber) {
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > 10) {
      foundNumber = foundNumber + `${randomNumbers[i]}, `
    }
  }
  return foundNumber;
}

console.log(NumberGreaterTen(randomNumbers, foundNumber));

// №3
let result
function userCalc(firstNumber, operator, secondNumber) {
  if (operator === '-') {
    result = firstNumber - secondNumber;
  } else if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '*') {
    result = firstNumber * secondNumber;
  } else {
    result = firstNumber / secondNumber;
  }
  return result;
}

console.log(userCalc(6, `+`, 31));










// function sumNumbers(firstNumber,secondNumber) {
//   return firstNumber + secondNumber
// }

// console.log(sumNumbers(12, 4));

const users = ['Victor', 'Alex', 'Max']
const numbers = [135, 235, 567, 568, 969]

function chechForCopyItem(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return ` ${item} is in the array`
    }
  }
  return ` ${item} not in the array`
}

console.log(chechForCopyItem(numbers, 135));

