let popup = document.querySelector('.form');
let openPopupButton = document.querySelector('.nav__button');
let closePopupButton = popup.querySelector('.form__close');
let closeNav = document.querySelector('.nav__toggle')


openPopupButton.addEventListener('click', function () {
  closeNav.checked = false;
  popup.classList.toggle('form_active');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('form_active');
});


  