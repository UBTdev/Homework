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
// ====================================================
const button = document.querySelector('.btn');
const text = document.querySelector('.text');
var red

button.addEventListener('click', () => {
  text.classList.toggle('red');
  text.classList.toggle('move');
  if (text.classList.contains('move')) {
    text.textContent = 'Я подвинулся';
  } else {
    text.innerText = 'Я на исходной';
  }
})
