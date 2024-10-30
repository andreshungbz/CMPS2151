//Practice 1: Get button and add listner to pop alert

// const alertHandler = () => {
//   alert('hello world');
// };

// const firstButton = document.querySelector('button');
// firstButton.addEventListener('click', alertHandler);

//Practice 2: Get all buttons, iterate them and add listner so any button clicked will trigger alert

const buttons = document.querySelectorAll('button');

// for (const button of buttons) {
//   button.addEventListener('click', alertHandler);
// }

//Practice 3: Play Sound

// const sound = new Audio('./sounds/crash.mp3');
// document.querySelector('button').addEventListener('click', () => {
//   sound.play();
// });

//Practice 4: In the CSS assign a background image to each of the buttons

//Practice 4.1: Implement switch to pick which sound to play

const crash = new Audio('./sounds/crash.mp3');
const kickBass = new Audio('./sounds/kick-bass.mp3');
const snare = new Audio('./sounds/snare.mp3');
const tom1 = new Audio('./sounds/tom-1.mp3');
const tom2 = new Audio('./sounds/tom-2.mp3');
const tom3 = new Audio('./sounds/tom-3.mp3');
const tom4 = new Audio('./sounds/tom-4.mp3');

const soundHandler = (key) => {
  switch (key) {
    case 'w':
      tom1.play();
      break;
    case 'a':
      tom2.play();
      break;
    case 's':
      tom3.play();
      break;
    case 'd':
      tom4.play();
      break;
    case 'j':
      snare.play();
      break;
    case 'k':
      crash.play();
      break;
    case 'l':
      kickBass.play();
      break;
    default:
      break;
  }
};

//Practice 5: adding event for key pressed

document.addEventListener('keydown', (e) => {
  soundHandler(e.key);
});

// also add for button click
for (const button of buttons) {
  // to use this.innerHTML use an anonymous function declaration function () {}
  button.addEventListener('click', () => {
    soundHandler(button.innerHTML);
  });
}

//Practice 6: adding animation for when button is triggered. Create function called animation()

const tom1Button = document.querySelector('.w');
const tom2Button = document.querySelector('.a');
const tom3Button = document.querySelector('.s');
const tom4Button = document.querySelector('.d');
const snareButton = document.querySelector('.j');
const crashButton = document.querySelector('.k');
const kickBassButton = document.querySelector('.l');

const animationHandler = (key, add) => {
  switch (key) {
    case 'w':
      if (add) {
        tom1Button.classList.add('pressed');
      } else {
        tom1Button.classList.remove('pressed');
      }
      break;
    case 'a':
      if (add) {
        tom2Button.classList.add('pressed');
      } else {
        tom2Button.classList.remove('pressed');
      }
      break;
    case 's':
      if (add) {
        tom3Button.classList.add('pressed');
      } else {
        tom3Button.classList.remove('pressed');
      }
      break;
    case 'd':
      if (add) {
        tom4Button.classList.add('pressed');
      } else {
        tom4Button.classList.remove('pressed');
      }
      break;
    case 'j':
      if (add) {
        snareButton.classList.add('pressed');
      } else {
        snareButton.classList.remove('pressed');
      }
      break;
    case 'k':
      if (add) {
        crashButton.classList.add('pressed');
      } else {
        crashButton.classList.remove('pressed');
      }
      break;
    case 'l':
      if (add) {
        kickBassButton.classList.add('pressed');
      } else {
        kickBassButton.classList.remove('pressed');
      }
      break;
    default:
      break;
  }
};

// alternative
const animationHandler2 = (key) => {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
};

document.addEventListener('keydown', (e) => {
  animationHandler(e.key, true);
});

document.addEventListener('keyup', (e) => {
  animationHandler(e.key, false);
});

for (const button of buttons) {
  button.addEventListener('mousedown', () => {
    animationHandler(button.innerHTML, true);
  });

  button.addEventListener('mouseup', () => {
    animationHandler(button.innerHTML, false);
  });
}
