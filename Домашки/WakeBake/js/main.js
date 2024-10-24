// mobile nav
(function () {
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const target = e.currentTarget
    const burgerIcon = e.target.closest('.burger-button');
    const burgerNavLink = e.target.closest('.nav__link');
    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;
    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu');
    } else {
      document.body.classList.remove('body--opened-menu');
    }
  }

  const modal = document.querySelector('.modal');
  const modalOpenBtn = document.querySelector('.offer__img-button');

  modalOpenBtn.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);

  function openModal(e) {
    e.preventDefault();
    document.body.classList.toggle('body--opened-modal');
  }

  function closeModal(e) {
    e.preventDefault();
    const target = e.target
    if (target.closest('.modal__cencel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal');
    }
  }
})()





// animateTitle
// =============================================
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
