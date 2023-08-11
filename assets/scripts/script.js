const audio = document.querySelector('.background-audio');

function playSlotSound() {
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
}

const button = document.querySelector('.enter');
button.addEventListener('click', () => {
    playSlotSound();
});

console.log(audio);
