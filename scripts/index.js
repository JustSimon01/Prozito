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



// Слайдер 

const btnRigth = document.querySelectorAll('.button-arrow_direction_right')
const btnLeft = document.querySelectorAll('.button-arrow_direction_left')
const mediaCards = document.querySelectorAll('.media_content_cards')

let position = 0

btnRigth.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        if (position < document.querySelector('.magazine__cards_page_index').offsetWidth) {
        position = position + 348;
        document.querySelector('.magazine__cards_page_index').scrollTo(position, 0)
        btnLeft.forEach((btn) => {
            btn.classList.remove('button-circular_state_disabled');
        });
    }

        else {
            btn.closest.classList.add('button-circular_state_disabled')}
    })
    
    })


btnLeft.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (position > 0) {
        position = position - 348;
        console.log(position);
        document.querySelector('.magazine__cards_page_index').scrollTo(position, 0);}
    })
})