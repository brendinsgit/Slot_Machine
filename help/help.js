const hoverAudio = document.querySelector('#hover-audio');
const returnArrowImage = document.querySelector('.arrow-link');

returnArrowImage.addEventListener('mouseenter', () => {
    hoverAudio.play();
    hoverAudio.volume = 0.3;
});

returnArrowImage.addEventListener('mouseleave', () => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
});
