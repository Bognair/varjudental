
// Hamburgermenü toggle funkciója (ikon animációval)
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const menuIcon = document.querySelector('.menu-icon');
    navList.classList.toggle('show');
    menuIcon.classList.toggle('open');
}

// Menüpont kattintásra automatikus bezárás
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            const navList = document.querySelector('.nav-list');
            const menuIcon = document.querySelector('.menu-icon');
            if (navList.classList.contains('show')) {
                navList.classList.remove('show');
                menuIcon.classList.remove('open');
            }
        });
    });
});

// Hamburgermenü toggle funkciója

  
  // A DOM betöltődése után inicializáljuk a galériákat
  document.addEventListener('DOMContentLoaded', function () {
    
    // Összes galéria konténer kiválasztása
    const galleries = document.querySelectorAll('.témakörök-galéria');
    
    galleries.forEach(function(gallery) {
      // A galéria képeinek kiválasztása
      const slides = gallery.querySelectorAll('.gallery-slide');
      let currentSlide = 0;
      
      // Ellenőrizzük, hogy van-e kezdetben aktív kép
      slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
          currentSlide = index;
        }
      });
      // Ha nincs aktív kép, az első képet tesszük aktívvá
      if (!slides[currentSlide].classList.contains('active')) {
        slides[0].classList.add('active');
        currentSlide = 0;
      }
      
      // Előző és következő gombok kiválasztása
      const prevButton = gallery.querySelector('.prev');
      const nextButton = gallery.querySelector('.next');
  
      // Előző gomb eseménykezelője
      prevButton.addEventListener('click', function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;  // körkörös léptetés
        slides[currentSlide].classList.add('active');
      });
  
      // Következő gomb eseménykezelője
      nextButton.addEventListener('click', function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;  // körkörös léptetés
        slides[currentSlide].classList.add('active');
      });
    });
  });


    /* === GYIK szekció === */
    document.querySelectorAll('.toggle-button').forEach(button => {
      button.addEventListener('click', () => {
        const container = button.parentElement;
        const extraText = container.querySelector('.extra-text');
        extraText.classList.toggle('show');
        button.classList.toggle('open');
      });
    });

    const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-item img").forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
    });
});

closeBtn.onclick = function() {
    lightbox.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
};

