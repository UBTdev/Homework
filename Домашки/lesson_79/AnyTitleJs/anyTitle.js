// Change title
let animationTitle = document.title;
document.title = ""
for (let i = animationTitle.length; i > 0; i = i - 1) {
  function updateTitle() {
    document.title = document.title + animationTitle[i - 1];
  }
  setTimeout(updateTitle, i * 300);
}

//Browser loker
document.getElementById("deathButton").onclick = function () {
  window.alert("Зря, бро...");
  for (let infinity = 1; infinity < Infinity; infinity += 1) {
    console.log(infinity);
  }

}
