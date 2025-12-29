// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
users.push({ name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true })

console.log(users)
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
function getUserAverageAge(users) {
  let userCount = 0;
  let userAgeSum = 0;
  users.forEach(user => {
    userAgeSum += user.age;
    userCount++;
  });
  return userAgeSum / userCount;
}
console.log(getUserAverageAge(users));
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users) {
  const usersIsAdmins = [];
  users.forEach(user => {
    if (user.isAdmin === true) {
      usersIsAdmins.push(user);
    }
  })
  return usersIsAdmins;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
  let countElements = n === undefined ? 1 : (n > arr.length ? arr.length : n);
  const currentArr = [];
  const firstElements = [];

  arr.forEach(element => {
    currentArr.push(element);
  });
  

  if (isNaN(countElements)) {
    return console.error('is not a number in second function arg (first)');
  } else if (countElements === 0) {
    return firstElements;
  } else {
    while (countElements > 0) {
      firstElements.push(currentArr[countElements - 1])
      countElements--;
    }
  }
  // return currentArr;
  return firstElements.toReversed();

}
console.log('Задание 4.')
console.log(first(users));
console.log(first(users, 0));
console.log(first(users, 1));
console.log(first(users, 122));