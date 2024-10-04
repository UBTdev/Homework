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
// =================================================
const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');

const openModal = () => {
  modal.classList.add('modal--open');
}
const closeModal = () => {
  modal.classList.remove('modal--open');
}

btnOpen.addEventListener('click', openModal)

modal.addEventListener('click', event => {
  const target = event.target;
  if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
    closeModal();
  }
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal();
  }
})

