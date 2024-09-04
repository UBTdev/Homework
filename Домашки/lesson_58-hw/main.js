let AniTitle = document.title;
document.title = " "
for (let i = AniTitle.length; i > 0; i = i - 1) {
  function updateTitle() {
    document.title = document.title + AniTitle[i - 1];
  }
  setTimeout(updateTitle, i * 300);
}