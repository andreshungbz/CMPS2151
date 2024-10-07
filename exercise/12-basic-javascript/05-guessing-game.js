const randomNumber = Math.floor(Math.random() * 100) + 1;

let response = 0;

while (response !== randomNumber) {
  response = Number(prompt('Guess a number between 1 and 100'));

  if (response > randomNumber) {
    alert('Too high! Try again!');
  }

  if (response < randomNumber) {
    alert('Too low! Try again!');
  }
}

alert('YOU GUESSED IT!');
