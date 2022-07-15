//открыть попап
function openPopup(popup) {
    popup.classList.add('pop-up_opend');
  } 
  
  //закрыть попап
  function closePopup(popup) {
      popup.classList.remove('pop-up_opend');
  } 

//открытие-закрытие попапа меню через функции
const button = document.querySelector('#aboutProject');
const menuList = document.querySelector('.header__menu');
button.addEventListener('click', function(){
    if (menuList.classList.contains('pop-up_opend')){
        menuList.classList.remove('pop-up_opend');
    }else{
        menuList.classList.add('pop-up_opend');
    }
});

const menuBurgerButton = document.querySelector('.header__menu-icon');
const menuPopup = document.querySelector('.header__menu-mobile');
const menuPopupCloseButton = document.querySelector('.header__menu-icon_close');

menuBurgerButton.addEventListener('click', function(){
    menuPopup.classList.add('pop-up_opend');
});

menuPopupCloseButton.addEventListener('click', function(){
    menuPopup.classList.remove('pop-up_opend');
});