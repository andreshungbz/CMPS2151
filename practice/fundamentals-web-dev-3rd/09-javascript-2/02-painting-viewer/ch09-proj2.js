/* add your code here */

// run after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // parse content
  const paintings = JSON.parse(content);
  const ul = document.querySelector('#paintings ul');

  // add thumnails to list and setting data-id for later
  for (const painting of paintings) {
    const thumbnailImg = document.createElement('img');
    thumbnailImg.setAttribute('src', `./images/small/${painting.id}.jpg`);
    thumbnailImg.setAttribute('alt', painting.title);

    thumbnailImg.dataset.id = painting.id;

    ul.appendChild(thumbnailImg);
  }

  // event delegation on list

  const figure = document.querySelector('#details figure'); // grab figure
  const description = document.querySelector('#description'); // grab description
  const title = document.querySelector('#summary #title'); // grab title h2
  const artist = document.querySelector('#summary #artist'); // grab artist h3

  ul.addEventListener('click', (e) => {
    // do something only if it is an img node that is clicked
    if (e.target && e.target.nodeName == 'IMG') {
      // clear figure image
      figure.innerHTML = '';

      // find specific painting using data-id previously set
      const painting = paintings.find(
        (element) => element.id == e.target.dataset.id
      );

      // set title and artist
      title.textContent = painting.title;
      artist.textContent = `By ${painting.artist}`;

      // create and append large to figure
      const figureImg = document.createElement('img');
      figureImg.setAttribute('src', `./images/large/${painting.id}.jpg`);
      figureImg.setAttribute('alt', painting.title);

      figure.appendChild(figureImg);

      // create and append feature boxes to figure
      for (const feature of painting.features) {
        const div = document.createElement('div');
        div.classList.add('box');

        // box styling
        div.style.position = 'absolute';
        div.style.left = `${feature.upperLeft[0]}px`;
        div.style.top = `${feature.upperLeft[1]}px`;
        div.style.width = `${feature.lowerRight[0] - feature.upperLeft[0]}px`;
        div.style.height = `${feature.lowerRight[1] - feature.upperLeft[1]}px`;

        // mousover shows description
        div.addEventListener('mouseover', () => {
          description.textContent = feature.description;
        });

        // mousout removes description
        div.addEventListener('mouseout', () => {
          description.textContent = '';
        });

        figure.appendChild(div);
      }
    }
  });
});
