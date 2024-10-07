const billTotal = Number(prompt('Enter your total bill in dollars'));
const tipPercent = 0.1;
const tip = billTotal * tipPercent;

alert(`For the bill of $${billTotal} the tip should be $${tip}`);
