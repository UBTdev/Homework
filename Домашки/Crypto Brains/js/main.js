(function () {
  // burger menu
  document.addEventListener('click', burgerInt)

  function burgerInt(e) {

    const burgerButton = e.target.closest('.header__burger-button');
    const burgerNavLink = e.target.closest('.header__nav-link');

    if (!burgerButton && !burgerNavLink) return;

    if (document.documentElement.clientWidth > 1000) return;

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu');
    } else {
      document.body.classList.remove('body--opened-menu');
    }
  }
  // smooth scroll
  document.querySelectorAll('a.smooth-scroll').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  // exchange-trands slider
  const swiper = new Swiper('.hero__exchange-rate-swiper', {

    spaceBetween: 28,
    slidesPerView: 'auto',
    freeMode: true,
    disableOnInteraction: true,
    
  });
  // market-trands slider
  new Swiper('.tab-controls__swiper', {

    spaceBetween: 28,
    slidesPerView: 'auto',
    freeMode: true,
    disableOnInteraction: true,
    // centeredSlides: true,

    // Responsive breakpoints
    breakpoints: {
      375: {
        slidesPerView: 'auto',
        spaceBetween: 28,
      },
    }
  });
  // slider
  new Swiper('.market-trend__swiper', {

    spaceBetween: 30,
    slidesPerView: 'auto',
    freeMode: true,
    // centeredSlides: true,

    // Responsive breakpoints
    breakpoints: {
      1666: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1201: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1001: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      321: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    }
  });
  // mobile advantages slider
  new Swiper('.advantages__swiper', {
    slidesPerView: 1,
    // effect: 'fade',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 30,
    },
    pagination: {
      el: '#swiper-1 .swiper-pagination',
      clicable: true,
    }
    
  });
  new Swiper('.testimonials__swiper', {

    spaceBetween: 30,
    slidesPerView: 2.5,
    // centeredSlides: true,

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // Responsive breakpoints 
    breakpoints: {
      1135: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      374: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

    }
  });
  // accordion
  let d = document,
    accordionToggles = document.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);

  skipClickDelay = function (e) {
    e.preventDefault();
    e.target.click();
  }

  setAriaAttr = function (el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function (el1, el2, expanded) {
    switch (expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function (e) {
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('active');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
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