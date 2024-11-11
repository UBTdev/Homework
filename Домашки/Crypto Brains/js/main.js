(function () {
  const swiper = new Swiper('.market-trend__swiper', {

    spaceBetween: 30,
    slidesPerView: 6,
    // centeredSlides: true,

    // Responsive breakpoints
    breakpoints: {
      1201: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      810: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      321: {
        slidesPerView: 1.5,
        spaceBetween: 0,
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