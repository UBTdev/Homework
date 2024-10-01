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

// =================================================
let buttonIsRed = false
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  if (buttonIsRed) {
    button.style.background = ('red');
    buttonIsRed = false;
  } else {
    button.style.background = ('blue');
    buttonIsRed = true;
  }
})

function scrolling() {
  console.log('scroll');
}

document.addEventListener('scroll', scrolling);
// =================================================
// form -- 1
function formSubmitEvent(subEvent) {
  alert(`thx`);
  subEvent.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', formSubmitEvent);
