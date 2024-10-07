const nameSlicer = () => {
  const input = prompt('Enter your name in lowercase');
  const firstLetter = input.slice(0, 1).toUpperCase();
  const remainingLetters = input.slice(1).toLowerCase();

  const name = firstLetter + remainingLetters;

  alert(`Your name is ${name}`);
};

nameSlicer();
