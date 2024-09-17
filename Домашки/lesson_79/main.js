
// thx stack overflow c:
window.console = {
  log: function (str) {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
// =============================================================
const nameUserInput = prompt("Please input your user name")
const passwordUserInput = prompt("Please input password")

if (nameUserInput == 'Victor' && passwordUserInput == 'password123') {
  setTimeout(() => { console.log('authorization was successful'); }, 2000);
  setTimeout(() => { console.log('authentication was successful'); }, 3000);
  setTimeout(() => { console.log('============================='); }, 3250);
  setTimeout(() => { console.log(`Your name: ${nameUserInput}`); }, 3500);
  setTimeout(() => { console.log('Your role: user'); }, 4000);
  setTimeout(() => { console.log(`Your password: ${passwordUserInput}`); }, 4500);
  setTimeout(() => { console.log('============================='); }, 4600);
  setTimeout(() => { console.log('C:/Users/imiti>'); }, 5000);
  alert('You are a user')
} else if
  (nameUserInput == 'Jonh' && passwordUserInput == 'admin123') {
  setTimeout(() => { console.log('authorization was successful'); }, 2000);
  setTimeout(() => { console.log('autentification was successful'); }, 3000);
  setTimeout(() => { console.log(`C:/users/${nameUserInput}/PersonalData/access data>`); }, 3500);
  setTimeout(() => { console.log(`Your name: ${nameUserInput}`); }, 4000);
  setTimeout(() => { console.log('Your role: admin'); }, 4200);
  setTimeout(() => { console.log(`Your password: ${passwordUserInput}`); }, 4400);
  setTimeout(() => { console.log('C:/users/PersonalData/access data>'); }, 4600);
  setTimeout(() => { console.log('============================='); }, 4700);
  setTimeout(() => { console.log('Other users:'); }, 5300);
  setTimeout(() => { console.log(`Name: Victor`); }, 5400);
  setTimeout(() => { console.log(`Password: pssword123`); }, 5500);
  setTimeout(() => { console.log('============================='); }, 5600);
  setTimeout(() => { console.log('C:/Users/imiti>'); }, 6000);
} else {
  setTimeout(() => { console.log(`C:/users/PersonalData/access data>`); }, 1000);
  setTimeout(() => { console.log('Incorrect data. Access denied!'); }, 2000);
  setTimeout(() => { alert('access denied!'); }, 3000)
  setTimeout(() => { console.log('========================================'); }, 3500)
  setTimeout(() => {
    console.log('_________________@@@@__________________')
    console.log('________________@_____@__________________')
    console.log('________________@_____@__________________')
    console.log('________________@_____@__________________')
    console.log('________________@_____@__________________')
    console.log('____@@@@@@@@_____@@@@@______@@__')
    console.log('____@___@____@_______@_____@____@___@_')
    console.log('____@___@____@_______@_____@__@_____@')
    console.log('____@___@____@_______@_____@_@_____@')
    console.log('____@@@@@@@________@@@@@_____@')
    console.log('____@________________________@_____@____')
    console.log('_____@_____________________@______@_____')
    console.log('______@___________________@______@______')
    console.log('_______@_________________________@______')
    console.log('_______@@@@@@@@@@@@@@@@______')
      ;
  }, 4000)
  setTimeout(() => { console.log('========================================'); }, 4500)
}


setTimeout(() => {
  const adultAge = 18
  const userAgeInput = prompt("Please input your age")
  if (userAgeInput >= adultAge) {
    console.log('Вы совершеннолетний')
  } else {
    console.log('Извините, но вам еще нет 18и')
  }
  ;
}, 6500)


// const firstNumber = 5
// const secondNumber = 20

// let result = null

// if (firstNumber === 10 || secondNumber === 20) {
//   result = firstNumber + secondNumber
//   console.log(result)
// } else {
//   result = secondNumber - firstNumber
//   console.log(result)
// }





