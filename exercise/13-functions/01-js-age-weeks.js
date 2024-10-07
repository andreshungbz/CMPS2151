const daysWeeksMonthsLeft = (age) => {
  const daysInYear = 365;
  const weeksInYear = 52;
  const monthsInYear = 12;
  const ageCheck = 90;

  const yearsLeft = ageCheck - age;

  console.log(
    `You have ${yearsLeft * daysInYear} days, ${
      yearsLeft * weeksInYear
    } weeks and ${yearsLeft * monthsInYear} months left.`
  );
};

const age = Number(prompt('Enter your age'));

if (!isNaN(age) && age > 0) {
  daysWeeksMonthsLeft(age);
} else {
  console.error('Invalid input');
}
