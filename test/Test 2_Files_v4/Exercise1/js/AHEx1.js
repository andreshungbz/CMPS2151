// Andres Hung

// step 3
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// step 4
const dice1 = document.querySelector('.img1');
dice1.setAttribute('src', `./images/dice${randomNumber1}.png`);

// step 5
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
const dice2 = document.querySelector('.img2');
dice2.setAttribute('src', `./images/dice${randomNumber2}.png`);

// step 6
const h1 = document.querySelector('h1');

let titleDisplay;
if (randomNumber1 > randomNumber2) {
  titleDisplay = '🚩 Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  titleDisplay = '🚩 Player 2 Wins!';
} else {
  titleDisplay = 'Draw!';
}

h1.innerHTML = titleDisplay;
