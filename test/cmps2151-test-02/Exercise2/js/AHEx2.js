// Andres Hung

// get node list of lights
const lights = document.querySelectorAll('.light');

// get individual lights
const greenLight = document.querySelector('#GreenLight');
const yellowLight = document.querySelector('#YellowLight');
const redLight = document.querySelector('#RedLight');

// function that resets all lights
const resetLights = () => {
  // remove background color from all lights
  for (const light of lights) {
    light.style.backgroundColor = '';
  }

  // also remove red light's blink class
  redLight.classList.remove('blink');
};

// function that sets the light's color based on the string passed
const makeLight = (lightID) => {
  resetLights(); // remove any other lights

  switch (lightID) {
    case 'Green':
      greenLight.style.backgroundColor = 'green';
      break;
    case 'Yellow':
      yellowLight.style.backgroundColor = 'yellow';
      break;
    case 'Red':
      redLight.style.backgroundColor = 'red';
      break;
    default:
      break;
  }
};

// onclick handler for red light that adds a blink class to it
const blink = () => {
  resetLights();

  redLight.classList.add('blink');
};
