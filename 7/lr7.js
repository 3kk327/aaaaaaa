

const maingameel = document.querySelector('.main-game');
let attempts = 5;


const gameel = document.createElement('input')
gameel.classList.add('gameel');
gameel.setAttribute('placeholder','Введи число');


const firstIn = document.createElement('input')
firstIn.classList.add('firstIn');
firstIn.setAttribute('placeholder','Введи начальное значение');


const firstOut = document.createElement('input')
firstOut.classList.add('firstOut');
firstOut.setAttribute('placeholder','Введи конечное значение');


const takeBut = document.createElement('button');
takeBut.classList.add('btn')
takeBut.innerText = 'Запустить процесс рандома...';
takeBut.addEventListener('click', (e) => {
    let chisla = gennum();
    gameel.setAttribute('data-random-number', chisla);
});
  
function gennum() {
    if (typeof parseInt(firstIn.value) !== 'number' || isNaN(firstIn.value)){
        alert('Просьба ввести данные корректно')
        return(NaN)
    }
    else{
        const min = parseInt(firstIn.value);
        const max = parseInt(firstOut.value);
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return(randomNumber)
    }
    
}


const checkBut = document.createElement('button');
checkBut.classList.add('btn')
checkBut.innerText = 'Ты угадал(а)?..';
checkBut.addEventListener('click', (e) => {
    const guessedNumber = parseInt(gameel.value);
    let randomNumber = parseInt(gameel.getAttribute('data-random-number'));
    if (attempts > 0 && randomNumber != NaN) {
        const guessedNumber = parseInt(gameel.value);
        if (guessedNumber === randomNumber) {
          alert('ДАААААА');
        } else if (guessedNumber < randomNumber) {
          alert('Нет( загаданное число больше.');
        } else {
          alert('Нет( загаданное число меньше.');
        }
        attempts--;
        gameel.setAttribute('data-attempts', attempts);
      } 
      else {
        alert('Попытки закончились(. Загаданное число: ' + randomNumber);
        attempts = 5;
        randomNumber = gennum();
      }
});



maingameel.appendChild(firstIn);
maingameel.appendChild(firstOut);
maingameel.appendChild(takeBut);
maingameel.appendChild(gameel);
maingameel.appendChild(checkBut);
