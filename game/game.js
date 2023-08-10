const slots = document.querySelectorAll('.slot');
const spinButton = document.querySelector('#spin');
const money = document.querySelector('.money-rectangle');
const goal = document.querySelector('.goal');
const congratulationsBox = document.querySelector('.congratulations-box');
const playAgainButton = document.querySelector('.play-again-button');
const audio = document.querySelector('.slot-sound');

(function () {
    const animals = [
      'http://127.0.0.1:5500/assets/images/gorilla.png',
      'http://127.0.0.1:5500/assets/images/sloth.png',
      'http://127.0.0.1:5500/assets/images/elephant.png',
      'http://127.0.0.1:5500/assets/images/badger.png'
    ];

    let isSpinning = false;
    let interval = null;
    let currentImages = [];
    let bananaGoal = 150;

  
  function updateGoal() {
    const remainingBananas = Math.max(0, bananaGoal - Number(money.textContent));
    goal.textContent = 'Bananas needed: ' + remainingBananas;
    if(remainingBananas == 0) {
      congratulationsBox.classList.remove('hidden');
      playAgainButton.addEventListener('click', function() {
        congratulationsBox.classList.add('hidden');
        money.textContent = 0;
        bananaGoal = 150;
        updateGoal();
      });
    }
  }


  updateGoal(); 


  spinButton.addEventListener('click', function () {
    if (isSpinning) {
      stopSpinning();
    } else {
      startSpinning();
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
      });
    }
  }
    
  function checkSlots() {
    const topImages = [currentImages[0], currentImages[3], currentImages[6]];
    const centerImages = [currentImages[1], currentImages[4], currentImages[7]];
    const bottomImages = [currentImages[2], currentImages[5], currentImages[8]];

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
    } 
    if (centerImages[0] === centerImages[1] && centerImages[0] === centerImages[2]) {
      if(centerImages[0] == 'http://127.0.0.1:5500/assets/images/gorilla.png') {
        money.textContent = Number(money.textContent) + 250;
        console.log("Congratulations! You've won the Jackpot!");
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
  