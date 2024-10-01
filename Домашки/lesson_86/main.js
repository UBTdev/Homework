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
// =============================================
const doc = {
  html: {
    head: {
      meta: {

      }
    },
    body: {
      header: {
      },
      main: {
      }
    }
  }
}

const firstBlock = doc.body.
console.log(firstBlock);