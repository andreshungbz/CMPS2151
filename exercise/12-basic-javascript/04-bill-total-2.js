const billTotal = Number(prompt('Enter your total bill in dollars'));

const tipPercent = 0.1;
const tip = billTotal * tipPercent;

if (isNaN(billTotal)) {
  alert(`Invalid input.`);
} else if (billTotal <= 0) {
  alert(`Bill total should be greater than 0.`);
} else {
  alert(`For the bill of $${billTotal} the tip should be $${tip}`);
}
