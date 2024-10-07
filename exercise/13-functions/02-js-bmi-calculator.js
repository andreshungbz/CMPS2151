const calculateBMI = (weight, height) => {
  return Math.round(weight / Math.pow(height, 2));
};

const weight = Number(prompt('Enter your weight in kg'));
const height = Number(prompt('Enter your height in m'));

alert(`Your BMI is ${calculateBMI(weight, height)}`);
