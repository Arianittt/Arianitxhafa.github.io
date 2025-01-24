const navLinks = document.querySelectorAll(".axh-nav-menu .axh-nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Ndryshimi i dukshmerise se menu-se mobile
    document.body.classList.toggle("show-mobile-menu");
});

//Mbyllet menuja kur klikohet butoni i mbylljes
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Mbyllet menuja kur klikohet lidhja nav
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

//Inicializimi i Shiritit te Levizjes
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    
    // Nese kemi nevoje per faqezim
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Shigjetat e lundrimit
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Pikat e nderprerjes se pergjegjshme
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
    });