document.addEventListener('DOMContentLoaded', function () {
  const url =
    'https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php';

  const container = document.querySelector('.container');
  const aside = document.querySelector('aside');
  const loader = document.querySelector('#loader');

  // initially don't display containers before fetch
  container.style.display = 'none';
  aside.style.display = 'none';

  // fetch
  fetch(url)
    .then((response) => response.json())
    .then((colorSchemes) => {
      console.log(colorSchemes);

      for (const colorScheme of colorSchemes) {
        generateColorScheme(colorScheme);
      }

      // display containers after fetching and hide loading
      container.style.display = 'block';
      aside.style.display = 'block';
      loader.style.display = 'none';

      // event delegation

      container.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName == 'BUTTON') {
          // find colorScheme based on data-id
          const colorScheme = colorSchemes.find(
            (element) => element.id == e.target.dataset.id
          );

          // add color rows to fieldset
          generateSchemeDetails(colorScheme);
        }
      });
    });

  // generate single color scheme function
  function generateColorScheme(colorScheme) {
    const article = document.querySelector('.scheme-group');

    const h3 = document.createElement('h3');
    h3.textContent = colorScheme.title;

    const section = document.createElement('section');
    section.classList.add('scheme');

    const divPreview = document.createElement('div');
    divPreview.classList.add('preview');

    for (const color of colorScheme.scheme) {
      const divColorBox = document.createElement('div');
      divColorBox.classList.add('color-box');
      divColorBox.style.backgroundColor = color.web;

      divPreview.append(divColorBox);
    }

    const divActions = document.createElement('div');
    divActions.classList.add('actions');

    const button = document.createElement('button');
    button.dataset.id = colorScheme.id;
    button.textContent = 'View';

    divActions.append(button);
    section.append(divPreview, divActions);

    article.append(h3, section);
  }

  // generate scheme details function
  function generateSchemeDetails(colorScheme) {
    const h2 = aside.querySelector('h2');
    const fieldset = aside.querySelector('fieldset');

    // set h2
    h2.textContent = colorScheme.title;

    // reset fieldset
    fieldset.innerHTML = '';

    for (const color of colorScheme.scheme) {
      const divColorRow = document.createElement('div');
      divColorRow.classList.add('colorRow');

      const divDetailBox = document.createElement('div');
      divDetailBox.classList.add('detailBox');
      divDetailBox.style.backgroundColor = color.web;

      const spanHex = document.createElement('span');
      spanHex.textContent = color.web;

      const spanRGB = document.createElement('span');
      spanRGB.textContent = `rgb(${color.color.red},${color.color.green},${color.color.blue})`;

      const label = document.createElement('label');
      label.textContent = color.name;

      divColorRow.append(divDetailBox, spanHex, spanRGB, label);
      fieldset.append(divColorRow);
    }
  }
});
