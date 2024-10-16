const billTotals = [50, 150, 20, 500];
const tips = [];

billTotals.forEach((bill) => {
  let tip;

  if (bill > 75) {
    tip = bill * 0.1;
  } else if (bill > 30 && bill < 75) {
    tip = bill * 0.2;
  } else if (bill < 30) {
    tip = bill * 0.3;
  }

  tips.push(Math.round(tip));
});

for (let i = 0; i < billTotals.length; ++i) {
  console.log(`For bill of $${billTotals[i]} the tip should be $${tips[i]}`);
}