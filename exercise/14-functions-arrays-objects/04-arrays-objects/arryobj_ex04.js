// convert comma-separated values into an array
const countries = csv.split(',');
console.log(countries);

// convert array into delimited string
const countriesString = countries.join(' ');
console.log(countriesString);

// check if these are arrays
console.log(`csv is an array: ${Array.isArray(csv)}`);
console.log(`countries is an array: ${Array.isArray(countries)}`);

// sort a simple array
countries.sort((a, b) => a.localeCompare(b));
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift('Belize');
countries.unshift('Mexico');
console.log(countries);

// search for element
console.log(`countries includes Germany: ${countries.includes('Germany')}`);

// search for element index
console.log(`index of Germany: ${countries.indexOf('Germany')}`);

// make a new array by extracting from another array
const countriesCopy = countries.toSpliced(0, 0);
console.log(countriesCopy);

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */

// use a loop to output all cities whose continent=="NA"
cities.forEach((element) => {
  if (element?.continent == 'NA') {
    console.log(element);
  }
});

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
galleries.forEach((element) => {
  if (element?.location?.country == 'USA') {
    console.log(element);
  }
});

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
colors.forEach((element) => {
  if (element?.luminance < 75) {
    console.log(element.name);
  }
});

console.log('---------------------');

// use two nested loops - outer: loop thru colors
for (let color of colors) {
  const name = color?.name;
  let sumRGB = 0;

  for (let value of color?.rgb) {
    sumRGB += value;
  }

  console.log(`${name} has RGB sum of ${sumRGB}`);
}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
const ul = document.createElement('ul');

for (let gallery of galleries) {
  const li = document.createElement('li');

  const a = document.createElement('a');
  a.setAttribute('href', gallery?.url);
  a.textContent = gallery?.name;

  li.append(a);

  ul.append(li);
}

// alternate
// const body = document.getElementsByTagName('body')[0];
// body.append(ul);

document.body.append(ul);
