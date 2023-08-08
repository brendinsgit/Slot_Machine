const slots = document.querySelectorAll('.slot');
const spinButton = document.querySelector('#spin');
const money = document.querySelector('.money-rectangle');


(function () {
    const animals = [
      '/assets/images/9-2-gorilla-png-file_600x600.png',
      '/assets/images/27117-9-chameleon-transparent-image-thumb.png',
      '/assets/images/8-2-sloth-png-file-thumb.png',
    ];

    let isSpinning = false;
    let interval = null;
    let currentImages = [];
  
    spinButton.addEventListener('click', function () {
      if (isSpinning) {
        stopSpinning();
      } else {
        startSpinning();
      }
    });
  
    function randomizeImages() {
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
      let topWinner = false;
      let centerWinner = false;
      let bottomWinner = false;
      let NWSEWinner = false;
      let SWNEWinner = false;
      if (topImages[0] === topImages[1] && topImages[0] === topImages[2]) {
        topWinner = true;
      } 
      if (centerImages[0] === centerImages[1] && centerImages[0] === centerImages[2]) {
        centerWinner = true;
      } 
      if (bottomImages[0] === bottomImages[1] && bottomImages[0] === bottomImages[2]) {
        bottomWinner = true;
      }
      if (currentImages[0] === currentImages[4] && currentImages[0] === currentImages[8]) {
        NWSEWinner = true;
      }
      if (currentImages[6] === currentImages[4] && currentImages[6] === currentImages[2]) {
        SWNEWinner = true;
      }
      console.log("Top Winner:", topWinner);
      console.log("Center Winner:", centerWinner);
      console.log("Bottom Winner:", bottomWinner);
      console.log("NWSEWinner:", NWSEWinner);
      console.log("SWNEWinner", SWNEWinner);
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
  