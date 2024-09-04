    // присваиваем переменной AniTitle значение "TRANSFORM"
    let AniTitle = "TRANSFORM";
    // Цикл for, т.е для переменной i присваиваем значение пер. AniTitle;
    // Пока i > 0, i = тому же i, но от него мы отнимаем 1 букв
    for (let i = AniTitle.length; i > 0; i = i - 1) {
        // Вызываем функцию смены заголовка
        function updateTitle() {
            // Присваиваем document.title значение пер. AniTitle[i - 1] т.е 
            //  та буква, которую отняло от общего кол-ва циклом, присваиваеться этой переменной
            document.title = document.title + AniTitle[i - 1];
        }
        // Задержка выполнения цикла
        setTimeout(updateTitle, i * 300);
    }