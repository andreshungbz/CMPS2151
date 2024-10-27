const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];

// display list of videos

const aside = document.querySelector('aside');
const video = document.querySelector('video');
const videoSource = document.querySelector('video source');

for (const file of files) {
  const handler = () => {
    video.pause();
    video.setAttribute('src', `./videos/${file}.mp4`);
    videoSource.setAttribute('src', `./videos/${file}.mp4`);
  };

  const img = document.createElement('img');
  img.setAttribute('src', `./images/${file}.jpg`);
  img.setAttribute('alt', file);
  img.addEventListener('click', handler);

  aside.appendChild(img);
}

// play button

const playButton = document.querySelector('#play');
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

// stop button

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
});

// progress bar

const progressBar = document.querySelector('#progressFilled');
console.log(progressBar);
const updateProgressBar = () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
};
video.addEventListener('timeupdate', updateProgressBar);

// skip buttons

const skipButtons = document.querySelectorAll('#controls [data-skip]');
for (const skipButton of skipButtons) {
  skipButton.addEventListener('click', () => {
    video.currentTime += Number(skipButton.getAttribute('data-skip'));
  });
}

// volume slider

const volumeSlider = document.querySelector('#controls input[type=range]');
volumeSlider.addEventListener('input', () => {
  video.volume = Number(volumeSlider.value);
});
