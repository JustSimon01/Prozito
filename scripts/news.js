//открыть попап
function openPopup(popup) {
    popup.classList.add('pop-up_opened');
  } 
  
  //закрыть попап
  function closePopup(popup) {
      popup.classList.remove('pop-up_opened');
  } 

//меню хедера, открытие-закрытие попапа меню через функции
const button = document.querySelector('#aboutProject');
const menuList = document.querySelector('.header__menu');
//открываем при наведении
button.addEventListener('mouseover', function(){
    menuList.classList.add('pop-up_opened');
    button.style.borderBottom = `1px solid #323232`;  
});
//закрываем при нажатии в любую часть документа, открываем при нажатии пальцем (исключили баг в планшетной с наведением)
document.addEventListener('click',function(e){ 
if (e.target !== button){
menuList.classList.remove('pop-up_opened');
button.style.borderBottom = '';
}else{
menuList.classList.add('pop-up_opened');
button.style.borderBottom = `1px solid #323232`;  
}
});

//закрытие меню при переходе по ссылке
const menuBurgerLinks = document.querySelectorAll('.header__mobile-menu-element');
menuBurgerLinks.forEach (function(btn) {
btn.addEventListener('click', function(){
  menuPopup.classList.remove('pop-up_opened');
});
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
