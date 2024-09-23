// Change title
const title = document.title;
let index = 0;

function animateTitle() {
  if (index < title.length) {
    document.title = title.slice(0, index + 1);
    index++;
    setTimeout(animateTitle, 300);
  };
}
animateTitle()

//=================================================
const users = [
  {
    name: 'alex',
    age: 23,
    isAdmin: false
  },
  {
    name: 'jonh',
    age: 25,
    isAdmin: true
  },
]

users.push({
  name: 'Victor',
  age: 34,
  isAdmin: false
})

console.log(users);

const usersName = []

users.forEach((user) => {
  usersName.push(user.name);
})

console.log(usersName);

let resultX = 0
const array = [1, 2, 3, 4];
resultX = array.indexOf(3, 2);
console.log(resultX);
console.log(array[resultX])
