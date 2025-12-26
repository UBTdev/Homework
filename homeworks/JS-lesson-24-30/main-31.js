// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  const priceAfterDiscount = basePrice * (1 - discountPercent / 100);
  const finalPrice = priceAfterDiscount * (1 + taxRate)
  return finalPrice;
};

console.log(calculateFinalPrice(100, 10, 0.2));


// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userName, password) {
  if (userName === 'admin' && password === 123456) {
    return 'Доступ разрешен'
  } else return 'Доступ запрещен';
}

console.log(checkAccess('admin', 123456))

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
function getTimeOfDay(currentHour) {
  switch (true) {
    case currentHour >= 0 && currentHour <= 5: return "Ночь";
    case currentHour >= 6 && currentHour <= 11: return "Утро";
    case currentHour >= 12 && currentHour <= 17: return "День";
    case currentHour >= 18 && currentHour <= 23: return "Вечер";
    default: return 'Некорректное время';
  }
};
console.log(getTimeOfDay(0))
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
function findFirstEven(firstNum, secondNum, count) {
  // шлем лесом, ой, то есть фильтруем вход
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return 'Некорректно задан диапазон чисел!';
  };
  // Переводим в число естли оно в str, это если для промпт, просто не хочу видеть в консоли строку, тк её пропускает isNaN
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  // Находим стартовое число диапозона
  let startNum;
  let endNum;
  const evenNumbers = [];
  switch (true) {
    case firstNum < secondNum:
      startNum = firstNum;
      endNum = secondNum;
      break;
    default:
      startNum = secondNum;
      endNum = firstNum;
  }
  // находим четные (если надо первое четное, можно просто вернуть его в теле условия if, но это скучно)
  while (startNum <= endNum) {
    if (startNum % 2 === 0) {
      evenNumbers.push(startNum);
    } 
    startNum++;
  }
  // варианты возврата
  if (count === 'allEvenNumbers') {
    return evenNumbers.length > 0 ? evenNumbers : "Чётных чисел нет";
  } else if (count === 'firstEvenNumber' || count === undefined) {
    return evenNumbers.length > 0 ? evenNumbers[0] : "Чётных чисел нет";
  }
}

console.log(findFirstEven(120, '2', 'allEvenNumbers'))
console.log(findFirstEven(11, '111', 'firstEvenNumber'))
console.log('ну и то что хотели от меня изначально')
console.log(findFirstEven(11, '-1'))