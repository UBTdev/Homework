// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
  name: "Michael",
  age: 9,
  stack: "HTML&CSS, PHP, JavaScript",
  frameworks: 'laravel, NextJS, NestJS',
  isMarried: false,
}

console.log(person)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const isEmpty = object => {
  return objectIsEmpty = Object.values(object).length === 0 ? true : false;

  // return !Object.values(object).length;
}
console.log(isEmpty(person));

// Вариант с forIn
const isEmptyWithForIn = object => {
  for (objectItem in object) {
    return false;
  }
  return true;
}
console.log(isEmptyWithForIn(person))

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
  title: 'some title',
  description: 'some description',
  isCompleted: false,
}

const modifications = {
  title: 'the title',
  description: 'the description',
  isCompleted: true,
}

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications }
}

const modifiedTask = cloneAndModify(task, modifications);
for (const taskCopyKey in modifiedTask) {
  console.log(`${taskCopyKey}: ` + modifiedTask[taskCopyKey])
}




// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.
const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод'
};

function callAllMethods(object) {
  for (let key in object) {
    if (typeof object[key] === 'function') {
      object[key]();
    }
  }
}
callAllMethods(myObject)
// console.log(callAllMethods(myObject));

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
