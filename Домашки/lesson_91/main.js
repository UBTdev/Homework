// Change title
const title = document.title;
let index = 0;

function animateTitle() {
  if (index < title.length) {
    document.title = title.slice(0, index + 1);
    index++;
    setTimeout(animateTitle, 230);
  }
}
animateTitle();
// =============================================
const btnsWrapper = document.querySelector('.btns');

btnsWrapper.addEventListener('click', event => {
  const target = event.target;
  if (target && target.classList.contains('btn')) {
    console.log(target.textContent);
  }
})

const btnsSecondWrapper = document.querySelector('.btns2');

btnsSecondWrapper.addEventListener('click', event => {
  console.log(event.target.textContent);
});
// =============================================
// Погружение и всплытие событий
const buttonWrapper = document.querySelector('.button__wrapper');
const button = document.querySelector('.btn3')

// method: event.stopPropagation(); - останавливает цепочку всплытия событий
// свойство: {capture: true} инициализирует погружение событий. Либо true из старой спецификации
button.addEventListener('click', (event) => {
  console.log('click button');
  // event.stopPropagation();
},
  { capture: true });

buttonWrapper.addEventListener('click', (event) => {
  console.log('click btnWrapper');
}, { capture: true }
);
// =========ЗАДАЧКА=ИЗ=learnjavascript=========
// ...your code...
container.onclick = function (event) {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
}