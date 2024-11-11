document.addEventListener('DOMContentLoaded', function () {
  /* add code after this comment */

  const manipulatedFigure = document.querySelector('#imgManipulated');
  const thumbBox = document.querySelector('#thumbBox');
  const sliderBox = document.querySelector('#sliderBox');

  // event delegation for thumbnail images
  thumbBox.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == 'IMG') {
      const img = manipulatedFigure.querySelector('img');
      const em = manipulatedFigure.querySelector('em');
      const span = manipulatedFigure.querySelector('span');

      console.log(e.target);

      em.textContent = e.target.getAttribute('alt');
      span.textContent = e.target.getAttribute('title');
      let path = e.target.getAttribute('src').replace('small', 'medium');
      img.setAttribute('src', path);
    }
  });

  const filters = {
    opacity: 100,
    saturation: 100,
    brightness: 100,
    hue: 0,
    grayscale: 0,
    blur: 0,
  };

  const updateFilters = () => {
    const img = manipulatedFigure.querySelector('img');
    img.style.filter = `
      opacity(${filters.opacity}%)
      saturate(${filters.saturation}%)
      brightness(${filters.brightness}%)
      hue-rotate(${filters.hue}deg)
      grayscale(${filters.grayscale}%)
      blur(${filters.blur}px)
    `;
  };

  // event delegation for sliders
  sliderBox.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == 'INPUT') {
      switch (e.target.id) {
        case 'sliderOpacity':
          document.querySelector(
            '#numOpacity'
          ).textContent = `${e.target.value}`;
          filters.opacity = e.target.value;
          break;
        case 'sliderSaturation':
          document.querySelector(
            '#numSaturation'
          ).textContent = `${e.target.value}`;
          filters.saturation = e.target.value;
          break;
        case 'sliderBrightness':
          document.querySelector(
            '#numBrightness'
          ).textContent = `${e.target.value}`;
          filters.brightness = e.target.value;
          break;
        case 'sliderHue':
          document.querySelector('#numHue').textContent = `${e.target.value}`;
          filters.hue = e.target.value;
          break;
        case 'sliderGray':
          document.querySelector('#numGray').textContent = `${e.target.value}`;
          filters.grayscale = e.target.value;
          break;
        case 'sliderBlur':
          document.querySelector('#numBlur').textContent = `${e.target.value}`;
          filters.blur = e.target.value;
          break;
        default:
          break;
      }

      updateFilters();
    }
  });

  const reset = () => {
    filters.opacity = 100;
    filters.saturation = 100;
    filters.brightness = 100;
    filters.hue = 0;
    filters.grayscale = 0;
    filters.blur = 0;

    updateFilters();
  };

  const resetButton = document.querySelector('#resetFilters');
  resetButton.addEventListener('click', reset);
});
