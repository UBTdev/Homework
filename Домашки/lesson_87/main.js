// Change title
const title = document.title;
let index = 0;

function animateTitle() {
  if (index < title.length) {
    document.title = title.slice(0, index + 1);
    index++;
    setTimeout(animateTitle, 300);
  }
}
animateTitle()
// ================================================

const element = document.querySelector('.block');

element.textContent = 'text';

console.log(element.textContent);

element.id = '234';
console.log(element.id);
element.style.color = 'red';
element.style.fontSize = '34px';

const elements = document.querySelectorAll('.block');

console.log(elements);
console.log(elements[2]);

elements.forEach((element) => {
  console.log(element);
  element.style.color = 'green';
})

const lastElement = document.querySelector('.main__block');
lastElement.style.background = 'red'
lastElement.style.rotate = '23deg'

