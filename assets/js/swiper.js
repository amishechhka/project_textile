// 5. Слайдер главного экрана.

const mainScreenSlider = new Swiper('.main-screen-slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   spaceBetween: 350,
   autoPlay: true,

   // Navigation arrows
   navigation: {
      nextEl: '.next',
      prevEl: '.prev',
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },
});

const seenSectionSlider = new Swiper('.seen-swiper', {
   // Optional parameters
   direction: 'horizontal',
   slidesPerView: 3,
   loop: false,
   spaceBetween: 19,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})
