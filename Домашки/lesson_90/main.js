// Change title
const title = document.title;
let index =   0;

function animateTitle() {
  if (index < title.length) {
    document.title = title.slice(0, index + 1);
    index++;
    setTimeout(animateTitle, 300);
  }
}
animateTitle();
// ========================================================
const btns = document.querySelector('.btn');

btns.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('red')
})