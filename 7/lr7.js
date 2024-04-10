const maingameel = document.querySelector('.main-game');
let attempts = 5;

function createAndAppendInputWithPlaceholder(className, placeholder) {
  const input = document.createElement('input');
  input.classList.add(className);
  input.setAttribute('placeholder', placeholder);
  maingameel.appendChild(input);
  return input;
}

function createAndAppendButtonWithTextAndListener(className, text, listener) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerText = text;
  button.addEventListener('click', listener);
  maingameel.appendChild(button);
}

const firstIn = createAndAppendInputWithPlaceholder('firstIn', 'Введи начальное значение');
const firstOut = createAndAppendInputWithPlaceholder('firstOut', 'Введи конечное значение');

createAndAppendButtonWithTextAndListener('btn', 'Запустить процесс рандома...', () => {
  const chisla = gennum();
  gameel.setAttribute('data-random-number', chisla);
});

const gameel = createAndAppendInputWithPlaceholder('gameel', 'Введи число');

function gennum() {
  const min = parseInt(firstIn.value);
  const max = parseInt(firstOut.value);
  if (isNaN(min) || isNaN(max)) {
    alert('Просьба ввести данные корректно');
    return NaN;
  } else {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }
}

createAndAppendButtonWithTextAndListener('btn', 'Ты угадал(а)?..', () => {
  const guessedNumber = parseInt(gameel.value);
  let randomNumber = parseInt(gameel.getAttribute('data-random-number'));
  if (attempts > 0 && !isNaN(randomNumber)) {
    if (guessedNumber === randomNumber) {
      alert('ДАААААА');
    } else if (guessedNumber < randomNumber) {
      alert('Нет( загаданное число больше.');
    } else {
      alert('Нет( загаданное число меньше.');
    }
    attempts--;
    gameel.setAttribute('data-attempts', attempts);
  } else {
    alert('Попытки закончились(. Загаданное число: ' + randomNumber);
    attempts = 5;
    randomNumber = gennum();
  }
});