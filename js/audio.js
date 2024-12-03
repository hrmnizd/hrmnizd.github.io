const audio = document.getElementById('beabadoobee');

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