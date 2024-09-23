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
animateTitle();
// ================================================
// Domashka
const webDevelopers = [
  {
    name: 'Michail',
    age: 19,
    skills: ['Html5', 'CSS3', 'JavaScript'],
    major: 'Web-Development',
    sayHello(name) {
      console.log(`Hello ${name}!`);
    } 
  }
];

webDevelopers[0].sayHello('World')
// Почему, когда я вызываю метод через консоль, код мне выдает нужное значение
// Но потом пишет undefined? Как это работает?
console.log(webDevelopers[0].sayHello('World'));

const users = [
  {
    name: 'Alex',
    age: 24,
    isAdmin: false
  },
  {
    name: 'Tom',
    age: 21,
    isAdmin: false
  },
  {
    name: 'Jonh',
    age: 34,
    isAdmin: false
  },
  {
    name: 'Wow4ick777',
    age: 54,
    isAdmin: true
  },
  {
    name: 'Adam',
    age: 20,
    isAdmin: false
  },
]

let notAdmins = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin !== true) {
    notAdmins++;
  }
}
console.log(`${notAdmins} users are not admins`);
// =================================================








// // 
// const users = [
//   {
//     name: 'alex',
//     age: 23,
//     isAdmin: false
//   },
//   {
//     name: 'Jonh',
//     age: 34,
//     isAdmin: true
//   },
// ]

// users.push({
//   name: 'Ivan',
//   age: 43,
//   isAdmin: false,
// })

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
//   console.log(users[i].age);
//   console.log(users[i].isAdmin);
// }

// const foo = 'Hi world'
// console.log(foo.toUpperCase());