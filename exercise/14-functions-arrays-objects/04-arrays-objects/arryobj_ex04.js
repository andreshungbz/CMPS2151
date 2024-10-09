const csv = 'Canada,France,United States,Austria,Italy,Germany';

const cities = [
  { country: 'Canada', city: 'Calgary', continent: 'NA' },
  { country: 'Canada', city: 'Banff', continent: 'NA' },
  { country: 'United States', city: 'New York City', continent: 'NA' },
  { country: 'United Kingdom', city: 'London', continent: 'EU' },
  { country: 'Germany', city: 'Darmstadt', continent: 'EU' },
  { country: 'Germany', city: 'Berlin', continent: 'EU' },
  { country: 'Egypt', city: 'Cairo', continent: 'AF' },
  { country: 'Ghana', city: 'Accra', continent: 'AF' },
  { country: 'Canada', city: 'Toronto', continent: 'NA' },
  { country: 'United States', city: 'San Francisco', continent: 'NA' },
  { country: 'United States', city: 'Washington, D. C.', continent: 'NA' },
];

const galleries = [
  {
    id: 51,
    name: 'Albright-Knox Art Gallery',
    location: { city: 'Buffalo', country: 'USA' },
    url: 'http://www.albrightknox.org/',
  },
  {
    id: 18,
    name: 'Kunsthistorisches Museum',
    location: { city: 'Vienna', country: 'Austria' },
    url: 'http://www.khm.at/',
  },
  {
    id: 22,
    name: 'Belvedere Gallery',
    location: { city: 'Vienna', country: 'Austria' },
    url: 'http://www.belvedere.at/',
  },
  {
    id: 42,
    name: 'Brooklyn Museum',
    location: { city: 'New York', country: 'USA' },
    url: 'http://www.brooklynmuseum.org/',
  },
  {
    id: 52,
    name: 'Detroit Institute of Arts',
    location: { city: 'Detroit', country: 'USA' },
    url: 'http://www.dia.org/',
  },
  {
    id: 27,
    name: 'J. Paul Getty Museum',
    location: { city: 'Los Angeles', country: 'USA' },
    url: 'http://www.getty.edu/museum/',
  },
  {
    id: 16,
    name: 'Louvre Museum',
    location: { city: 'Paris', country: 'France' },
    url: 'http://www.louvre.fr/',
  },
  {
    id: 6,
    name: 'Metropolitan Museum of Art',
    location: { city: 'New York', country: 'USA' },
    url: 'http://www.metmuseum.org/',
  },
  {
    id: 19,
    name: "Musee d'Orsay",
    location: { city: 'Paris', country: 'France' },
    url: 'http://www.musee-orsay.fr/',
  },
  {
    id: 30,
    name: 'Rijksmuseum',
    location: { city: 'Amsterdam', country: 'Netherlands' },
    url: 'http://www.rijksmuseum.nl/',
  },
  {
    id: 32,
    name: 'Royal Picture Gallery Mauritshuis',
    location: { city: 'The Hague', country: 'Netherlands' },
    url: 'http://www.mauritshuis.nl/',
  },
];

const colorsAsString = `[
   {"name":"Abaddon Black","hex":"#231f20","rgb":[35,31,32],"luminance":21.30621829419759},
   {"name":"Abaidh White","hex":"#f2f1e6","rgb":[242,241,230],"luminance":161.04682751609855},
   {"name":"Abbey","hex":"#4c4f56","rgb":[76,79,86],"luminance":52.563806188288915},
   {"name":"Abbey Stone","hex":"#aba798","rgb":[171,167,152],"luminance":111.91121063593226},
   {"name":"Dark Strawberry","hex":"#80444c","rgb":[128,68,76],"luminance":55.974082716914616},
   {"name":"Dark Tan","hex":"#918151","rgb":[145,129,81],"luminance":87.74335023236803},
   {"name":"Dark Tangerine","hex":"#ffa812","rgb":[255,168,18],"luminance":124.67006932299347},
   {"name":"Fjord Blue","hex":"#007290","rgb":[0,114,144],"luminance":68.90213189735132},
   {"name":"Flame Scarlet","hex":"#cd212a","rgb":[205,33,42],"luminance":64.46113255288026},
   {"name":"Flamenco","hex":"#ea8645","rgb":[234,134,69],"luminance":105.56607445576442},
   {"name":"Honey Flower","hex":"#5c3c6d","rgb":[92,60,109],"luminance":46.38473822282497},
   {"name":"Honey Fungus","hex":"#d18e54","rgb":[209,142,84],"luminance":104.61698797518498},
   {"name":"Light Sage","hex":"#bcecac","rgb":[188,236,172],"luminance":150.78255082071001},
   {"name":"Light Salmon","hex":"#fea993","rgb":[254,169,147],"luminance":126.05499073420297},
   {"name":"Mirage Blue","hex":"#636c77","rgb":[99,108,119],"luminance":71.26926667926364},
   {"name":"Out of Blue","hex":"#c0f7db","rgb":[192,247,219],"luminance":157.92653273278688},
   {"name":"Outer Space","hex":"#414a4c","rgb":[65,74,76],"luminance":48.3698662909047},
   {"name":"Outrageous Orange","hex":"#ff6e4a","rgb":[255,110,74],"luminance":100.26839492581897},
   {"name":"Quaking Grass","hex":"#bbc6a4","rgb":[187,198,164],"luminance":130.32377780359192},
   {"name":"Quantum Blue","hex":"#6e799b","rgb":[110,121,155],"luminance":80.24223158038416},
   {"name":"Raspberry Patch","hex":"#a34f66","rgb":[163,79,102],"luminance":68.27122880101103},
   {"name":"Santa Fe Sunrise","hex":"#cc9469","rgb":[204,148,105],"luminance":106.82336959673195}
]`;

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
