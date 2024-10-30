// burger menu
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
// modal Window
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

  // tabs
  const tabControls = document.querySelector('.tab-controls');
  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link');

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains('tab-controls__link--active')) return;

    const tabContentId = tabControl.getAttribute('href');
    const tabContent = document.querySelector(tabContentId);
    const tabControlActive = document.querySelector('.tab-controls__link--active');
    const tabActive = document.querySelector('.tab-content--show');

    if (tabControlActive) {
      tabControlActive.classList.remove('tab-controls__link--active');
    }
    
    if (tabActive) {
      tabActive.classList.remove('tab-content--show');
    }

    tabControl.classList.add('tab-controls__link--active');
    tabContent.classList.add('tab-content--show');
  }

  // accordion
  const accordionLists = document.querySelectorAll('.accordion__list');

  accordionLists.forEach(el => (

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget 
      const accordionShowContent = accordionList.querySelector('.accordion-list__content');

      const accordionControl = e.target.closest('.accordion-list__button');
      const accordionContentWrap = e.target.closest('.accordion-list__content');;
      if (!accordionControl) return;
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionContent.classList.toggle('accordion-list__content--show');
      accordionItem.classList.toggle('accordion-list__item--show');
    })
  ))
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