const audio = document.getElementById('someonenew');
audio.volume = 0.01;

if ('autoplay' in document.createElement('audio')) {
  if (document.hasFocus()) {
    audio.play();
  } else {
    document.addEventListener('click', () => {
      audio.play();
    });
  }
} else {
  const playButton = document.createElement('button');
  playButton.classList.add("playButton");
  playButton.addEventListener('click', () => {
    audio.play();
  });
  document.body.appendChild(playButton);
}