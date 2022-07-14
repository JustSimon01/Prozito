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
const menuList = document.querySelector('.pop-up_menu');
button.addEventListener('click', function(){
    if (menuList.classList.contains('pop-up_opend')){
        menuList.classList.remove('pop-up_opend');
    }else{
        menuList.classList.add('pop-up_opend');
    }
});
