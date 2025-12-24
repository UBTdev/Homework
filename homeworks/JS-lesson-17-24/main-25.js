// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i)
}

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.
let num = +prompt("Введите число для вычисления факториала:");
// let num = 3;

let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`Факториал числа ${num} = ${factorial}`);

// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.
const black = 'Ч ';
const white = 'Б ';
const size = 8;

for (let row = 1; row <= size / 2; row++) {
  let line1 = '';
  let line2 = '';
  for (let col = 1; col <= size / 2; col++) {
    line1 += black + white;
    line2 += white + black;
  }
  console.log(line1);
  console.log(line2);
}

