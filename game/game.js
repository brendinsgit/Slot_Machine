(function () {
    const animals = [
      '/assets/images/9-2-gorilla-png-file_600x600.png',
      '/assets/images/27117-9-chameleon-transparent-image-thumb.png',
      '/assets/images/8-2-sloth-png-file-thumb.png',
    ];
  
    const slots = document.querySelectorAll('.slot');
  
    document.querySelector('#spin').addEventListener('click', function () {
      randomizeImages();
    });
  
    function randomizeImages() {
      for (const slot of slots) {
        const images = slot.querySelectorAll('img');
        images.forEach(img => {
          const randomIndex = Math.floor(Math.random() * animals.length);
          img.src = animals[randomIndex];
        });
      }
    }
  
    randomizeImages();
  })();
  