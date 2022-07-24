
//открытие-закрытие попапа меню через функции
const button = document.querySelector('#aboutProject');

const menuList = document.querySelector('.header__menu');
button.addEventListener('click', function(){
    if (menuList.classList.contains('pop-up_opened')){
        menuList.classList.remove('pop-up_opened');
    }else{
        menuList.classList.add('pop-up_opened');
    }
});


const menuBurgerButton = document.querySelector('.header__menu-icon');
const menuPopup = document.querySelector('.header__menu-mobile');
const menuPopupCloseButton = document.querySelector('.header__menu-icon_close');

menuBurgerButton.addEventListener('click', function(){
    menuPopup.classList.add('pop-up_opened');
});

menuPopupCloseButton.addEventListener('click', function(){
    menuPopup.classList.remove('pop-up_opened');
});