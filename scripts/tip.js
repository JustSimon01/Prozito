// закрытие мини попапа типовая страница
const miniPopup = document.querySelector('.notion')
const popupTip = document.querySelector('.chapters')
const popupTipOpen = document.querySelector('.chapter')
const miniPopupClose = document.querySelector('.tip-close')
const popupTipClose = document.querySelector('#popup-close')

miniPopupClose.addEventListener('click', function() {
    miniPopup.classList.remove('pop-up_opened');
});

popupTipClose.addEventListener('click', function() {
    popupTip.classList.remove('pop-up_opened');
});

function openPopup(popup) {
    popup.classList.add('pop-up_opened')
};

popupTipOpen.addEventListener('click', evt => {
    openPopup(popupTip);
});


//меню хедера, открытие-закрытие попапа меню через функции
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