/* add your code here */

const constructStyle = (color) => {
  const cssString = `background-color: ${color.hex};${
    color.luminance < 70 ? ' color: white;' : ''
  }`;

  return cssString;
};

const constructColor = (color) => {
  const colorString = `<span style="${constructStyle(color)}">${
    color.name
  }</span>`;

  return colorString;
};

const outputColors = (colors) => {
  for (let color of colors) {
    document.write(`${constructColor(color)}`);
  }
};

const outputCard = (photo) => {
  document.write(`
  <article>
      <img src="images/${photo.filename}" alt="${photo.title}">
      <div class="caption">
        <h2>${photo.title}</h2>
        <p>${photo.location.city}, ${photo.location.country}</p>
        <h3>Colors</h3>
  `);

  outputColors(photo.colors);

  document.write(`</div></article>`);
};

const photoData = JSON.parse(content);
for (let photo of photoData) {
  outputCard(photo);
}
