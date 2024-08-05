/* 
// 1. Навесить "актив" на пунткы меню.
2. Связать "актив" пункта меню с "активом" выпадающего меню.
3. Сделать чтобы при наведении открывалось меню.
4. При адаптации слайдер на секцию тригеров.
// 5. Слайдер главного экрана.
// 6. Слайдер на секцию "Просмотренные".
7. Подключить карту в футер.
// 8. Возможность ставить лайк на просмотренное.
*/

// const { default: Swiper } = require("swiper");

// 1. Навесить "актив" на пунткы меню.

var menuItems = document.querySelectorAll('.header-menu__item');

function removeCLass() {
   for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
   }
   this.classList.add('active');
}

// 2. Связать "актив" пункта меню с "активом" выпадающего меню.

var menuWrapper = document.querySelectorAll('.menu-wrapper');

menuItems.forEach(function (e) {
   e.onclick = removeCLass;
   e.addEventListener('mouseover', el => {
      var currTab = el.target.dataset.line;
      for (var i = 0; i < menuWrapper.length; i++) {
         menuWrapper[i].classList.remove('active');
         if (menuWrapper[i].dataset.menu == currTab) {
            menuWrapper[i].classList.add('active');
         }
      }
      for (var i = 0; i < menuWrapper.length; i++) {
         menuWrapper[i].classList.remove('active');
      }
   });
   e.addEventListener('click', el => {
      var currTab = el.target.dataset.line;
      for (var i = 0; i < menuWrapper.length; i++) {
         menuWrapper[i].classList.remove('active');
         if (menuWrapper[i].dataset.menu == currTab) {
            menuWrapper[i].classList.add('active');
         }
      }
   });
});

// 8. Возможность ставить лайк на просмотренное.

var likeButtons = document.querySelectorAll('.like-product');
console.log(likeButtons);

function changeCLass() {
   this.classList.toggle('active');
}

likeButtons.forEach(function (e) {
   e.onclick = changeCLass;
});
