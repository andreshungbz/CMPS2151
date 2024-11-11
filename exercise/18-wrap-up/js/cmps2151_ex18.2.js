const photos = JSON.parse(content);

/* put your code after this */

const section = document.querySelector('#parent');

for (const photo of photos) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.setAttribute('src', `images/${photo.filename}`);
  img.setAttribute('alt', photo.title);

  const figcaption = document.createElement('figcaption');

  const h2 = document.createElement('h2');
  h2.textContent = photo.title;
  const p = document.createElement('p');
  p.textContent = photo.description;

  figcaption.appendChild(img);
  figcaption.appendChild(h2);
  figcaption.appendChild(p);

  for (const color of photo.colors) {
    const span = document.createElement('span');
    span.style.backgroundColor = color.hex;
    figcaption.appendChild(span);
  }

  figure.appendChild(figcaption);
  section.appendChild(figure);
}
