const names = ['Manuel', 'Ben', 'David', 'Andres', 'Carlos'];

const whoIsBuyingLunch = (namesArray) => {
  // random indices from 0 to length - 1
  const randomIndex = Math.floor(Math.random() * namesArray.length);
  return `${namesArray[randomIndex]} is going to buy lunch today!`;
};

console.log(whoIsBuyingLunch(names));
