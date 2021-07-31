  document.querySelector('.header-menu__button').addEventListener('click', function () {
  document.querySelector('.header-menu__menu').classList.add('header-menu__menu_opened');
})
  document.querySelector('.header-menu__close-button').addEventListener('click', function () {
    document.querySelector('.header-menu__menu').classList.remove('header-menu__menu_opened');
  })
