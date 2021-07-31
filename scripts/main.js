/*let headerBurgerBtn = document.querySelector('.header-menu__button');

//Функция добавления класса для открытия popup
function openBurgerMenu(element) {
  element.classList.add('header-menu__menu_opened');
}

//Функция удаления класса для закрытия Gallery
function closeGallery(element) {
  element.classList.remove('header-menu__menu_opened');
}
//Открытие гамбургер-меню
headerBurgerBtn.addEventListener('click', function () {
  openBurgerMenu(popup);
});*/

  document.querySelector('.header-menu__button').addEventListener('click', function () {
  document.querySelector('.header-menu__menu').classList.toggle('header-menu__menu_opened');
})
