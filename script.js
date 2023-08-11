const slots = document.querySelectorAll('.slot');
const spinButton = document.querySelector('#spin');
const money = document.querySelector('.money-rectangle');
const goal = document.querySelector('.goal');
const congratulationsBox = document.querySelector('.congratulations-box');
const playAgainButton = document.querySelector('.play-again-button');
const audio = document.querySelector('.background-audio');
const funnyButton = document.querySelector('.funny-button');
const funnyAudio = document.querySelector('#funny-audio');
const ohMonkey = document.querySelector('#oh-monkey');
const slotAudio = document.querySelector('#slot-audio');
const correctAudio = document.querySelector('#correct-audio');
const levelTwoButton = document.querySelector('.level-two-button');
const levelTwoAudio = document.querySelector('#level-two-audio');
const levelTwoBox = document.querySelector('.level-two-box');
const chatbox = document.getElementById('chatbox');
const popupContainer = document.getElementById('popup-container');
const closePopup = document.getElementById('close-popup')
let levelOne = true;
let levelTwo = true;


(function () {
    let animals = [
      'http://127.0.0.1:5500/assets/images/gorilla.png',
      'http://127.0.0.1:5500/assets/images/sloth.png',
      'http://127.0.0.1:5500/assets/images/elephant.png',
      'http://127.0.0.1:5500/assets/images/badger.png'
    ];

    let isSpinning = false;
    let interval = null;
    let currentImages = [];
    let bananaGoal = 100;

    

  function playSlotSound() {
    audio.currentTime = 0;
    audio.volume = 0.05;
    audio.play();
  }
  playSlotSound();

  function startSpinning() {
      isSpinning = true;
      spinButton.disabled = false;
      spinButton.innerText = 'Stop!';
      interval = setInterval(randomizeImages, 100);
  }
  
  function updateGoal() {
    let remainingBananas = Math.max(0, bananaGoal - Number(money.textContent));
    goal.textContent = 'Bananas needed: ' + remainingBananas;
    if(remainingBananas == 0 && levelOne) {
      congratulationsBox.classList.remove('hidden');
      ohMonkey.play();
      ohMonkey.volume = 0.2;
      spinButton.disabled = true;
      funnyButton.addEventListener('click', function() {
        funnyAudio.play();
        funnyAudio.volume = 0.1;
      })
    } else if (levelTwo && remainingBananas == 0) {
      levelTwoBox.classList.remove('hidden');
      spinButton.disabled = true;
    }
  }

  
  playAgainButton.addEventListener('click', function() {
    if (!levelTwo) {
      congratulationsBox.classList.add('hidden');
      levelTwoBox.classList.add('hidden');
    }
    levelTwoBox.classList.add('hidden');
    spinButton.disabled = false;
    money.textContent = 0;
    updateGoal();
  });

  levelTwoButton.addEventListener('click', function() {
    congratulationsBox.classList.add('hidden');
    levelTwo = true;
    levelOne = false;
    spinButton.disabled = false;
    money.textContent = 0;
    bananaGoal = 250;
    audio.pause();
    levelTwoAudio.play();
    levelTwoAudio.volume = 0.2;
    updateGoal();
  });


  updateGoal(); 


  spinButton.addEventListener('click', function () {
    if (isSpinning) {
      stopSpinning();
      slotAudio.pause();
    } else {
      startSpinning();
      slotAudio.volume = 0.2;
      slotAudio.play(); 
    }
  });
  
  function randomizeImages() {
    currentImages = [];
    for (const slot of slots) {
      const images = slot.querySelectorAll('img');
      images.forEach(img => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        img.src = animals[randomIndex];
        currentImages.push(img.src);
        console.log('New img.src:', img.src);
      });
    }
  }


  function checkSlots() {
    let topImages = [currentImages[0], currentImages[3], currentImages[6]];
    let centerImages = [currentImages[1], currentImages[4], currentImages[7]];
    let bottomImages = [currentImages[2], currentImages[5], currentImages[8]];

    if (topImages[0] === topImages[1] && topImages[0] === topImages[2]) {
      if(topImages[0] == 'http://127.0.0.1:5500/assets/images/gorilla.png') {
        money.textContent = Number(money.textContent) + 50;
      }
      if(topImages[0] == 'http://127.0.0.1:5500/assets/images/sloth.png') {
        money.textContent = Number(money.textContent) + 15;
      }
      if(topImages[0] == 'http://127.0.0.1:5500/assets/images/elephant.png') {
        money.textContent = Number(money.textContent) + 60;
      }
      if(topImages[0] == 'http://127.0.0.1:5500/assets/images/badger.png') {
        money.textContent = Number(money.textContent) + 80;
      }
      correctAudio.play();
      correctAudio.volume = 0.2;
    } 
    if (centerImages[0] === centerImages[1] && centerImages[0] === centerImages[2]) {
      if(centerImages[0] == 'http://127.0.0.1:5500/assets/images/gorilla.png') {
        money.textContent = Number(money.textContent) + 250;
      }
      if(centerImages[0] == 'http://127.0.0.1:5500/assets/images/sloth.png') {
        money.textContent = Number(money.textContent) + 15;
      }
      if(centerImages[0] == 'http://127.0.0.1:5500/assets/images/elephant.png') {
        money.textContent = Number(money.textContent) + 60;
      }
      if(centerImages[0] == 'http://127.0.0.1:5500/assets/images/badger.png') {
        money.textContent = Number(money.textContent) + 80;
      }
      correctAudio.play();
      correctAudio.volume = 0.2;
    } 
    if (bottomImages[0] === bottomImages[1] && bottomImages[0] === bottomImages[2]) {
      if(bottomImages[0] == 'http://127.0.0.1:5500/assets/images/gorilla.png') {
        money.textContent = Number(money.textContent) + 50;
      }
      if(bottomImages[0] == 'http://127.0.0.1:5500/assets/images/sloth.png') {
        money.textContent = Number(money.textContent) + 15;
      }
      if(bottomImages[0] == 'http://127.0.0.1:5500/assets/images/elephant.png') {
        money.textContent = Number(money.textContent) + 60;
      }
      if(bottomImages[0] == 'http://127.0.0.1:5500/assets/images/badger.png') {
        money.textContent = Number(money.textContent) + 80;
      }
      correctAudio.play();
      correctAudio.volume = 0.2;
    }
    if (currentImages[0] === currentImages[4] && currentImages[0] === currentImages[8]) {
      if(currentImages[0] == 'http://127.0.0.1:5500/assets/images/gorilla.png') {
        money.textContent = Number(money.textContent) + 50;
      }
      if(currentImages[0] == 'http://127.0.0.1:5500/assets/images/sloth.png') {
        money.textContent = Number(money.textContent) + 15;
      }
      if(currentImages[0] == 'http://127.0.0.1:5500/assets/images/elephant.png') {
        money.textContent = Number(money.textContent) + 60;
      }
      if(currentImages[0] == 'http://127.0.0.1:5500/assets/images/badger.png') {
        money.textContent = Number(money.textContent) + 80;
      }
      correctAudio.play();
      correctAudio.volume = 0.2;
    }
    if (currentImages[6] === currentImages[4] && currentImages[6] === currentImages[2]) {
      if(currentImages[6] == 'http://127.0.0.1:5500/assets/images/gorilla.png') {
        money.textContent = Number(money.textContent) + 50;
      }
      if(currentImages[6] == 'http://127.0.0.1:5500/assets/images/sloth.png') {
        money.textContent = Number(money.textContent) + 15;
      }
      if(currentImages[6] == 'http://127.0.0.1:5500/assets/images/elephant.png') {
        money.textContent = Number(money.textContent) + 60;
      }
      if(currentImages[6] == 'http://127.0.0.1:5500/assets/images/badger.png') {
        money.textContent = Number(money.textContent) + 80;
      }
      correctAudio.play();
      correctAudio.volume = 0.2;
    }
    updateGoal();
  }
       
  
  function startSpinning() {
    isSpinning = true;
    spinButton.disabled = false;
    spinButton.innerText = 'Stop!';

    interval = setInterval(randomizeImages, 100);
  }
 
    

  function stopSpinning() {
    isSpinning = false;
    spinButton.disabled = false;
    spinButton.textContent = 'Spin!';
    clearInterval(interval);
    checkSlots();
  }
  


  randomizeImages();
})();