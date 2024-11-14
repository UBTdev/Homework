(function () {
  // burger menu
  document.addEventListener('click', burgerInt)

  function burgerInt(e) {

    const burgerButton = e.target.closest('.header__burger-button')
  }
  // market-trands slider
  const swiper = new Swiper('.tab-controls__swiper', {

    spaceBetween: 28,
    slidesPerView: 6,
    // centeredSlides: true,

    // Responsive breakpoints
    breakpoints: {
      375: {
        slidesPerView: 3.5,
        spaceBetween: 28,
      },
    }
  });
  // slider
  new Swiper('.market-trend__swiper', {

    spaceBetween: 30,
    slidesPerView: 6,
    // centeredSlides: true,

    // Responsive breakpoints
    breakpoints: {
      1666: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1001: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      321: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
    }
  });


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