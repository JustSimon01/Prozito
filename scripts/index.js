//открыть попап
function openPopup(popup) {
    popup.classList.add('pop-up_opened');
  } 
  
  //закрыть попап
  function closePopup(popup) {
      popup.classList.remove('pop-up_opened');
  } 

//открытие-закрытие попапа меню через функции
const button = document.querySelector('#aboutProject');

const menuList = document.querySelector('.header__menu');
button.addEventListener('click', function(){
    if (menuList.classList.contains('pop-up_opened')){
        menuList.classList.remove('pop-up_opened');
        button.style.borderBottom = '';
 
    }else{
        menuList.classList.add('pop-up_opened');
        button.style.borderBottom = `1px solid #323232`;
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


//мини-попап на заглавной (закрытие. поумолчанию открыт)
const popupMini = document.querySelector('.pop-up__mini');
const buttonMiniPopupClose = document.querySelector('.button-close');

buttonMiniPopupClose.addEventListener('click', function() {
    popupMini.classList.remove('pop-up_opened');
});


// Слайдер 

// Блок Новости

const newsBtnRigth = document.querySelector('.button_news_rigth');
const newsBtnLeft = document.querySelector('.button_news_left');
const newsCards = document.querySelector('.news_cards_index');

let positionNewsCards = 0
let positionNewsShift = newsCards.offsetWidth / 2

newsBtnRigth.addEventListener("click", () => {
    if (positionNewsCards < newsCards.offsetWidth) {
      positionNewsCards = positionNewsCards + positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnLeft.classList.remove("button-arrow_state_disabled");
    } else if ((positionNewsCards = newsCards.offsetWidth)) {
      positionNewsCards = positionNewsCards + positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnRigth.classList.add("button-arrow_state_disabled");
    }
  });
  
 newsBtnLeft.addEventListener("click", () => {
    if (positionNewsCards > positionNewsShift) {
      positionNewsCards = positionNewsCards - positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnRigth.classList.remove("button-arrow_state_disabled");
    } else if (positionNewsCards <= positionNewsShift) {
      positionNewsCards = positionNewsCards - positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnLeft.classList.add("button-arrow_state_disabled");
    }
  });


// Блок Журнал

const magazineBtnRigth = document.querySelector(".button_magazine_right");
const magazineBtnLeft = document.querySelector(".button_magazine_left");
const magazineCards = document.querySelector(".magazine__cards_page_index");

let positionMagazineCards = 0;
let positionMagazineShift = magazineCards.offsetWidth / 2;

magazineBtnRigth.addEventListener("click", () => {
  if (positionMagazineCards < magazineCards.offsetWidth) {
    positionMagazineCards = positionMagazineCards + positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnLeft.classList.remove("button-arrow_state_disabled");
  } else if ((positionMagazineCards = magazineCards.offsetWidth)) {
    positionMagazineCards = positionMagazineCards + positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnRigth.classList.add("button-arrow_state_disabled");
  }
});

magazineBtnLeft.addEventListener("click", () => {
  if (positionMagazineCards > positionMagazineShift) {
    positionMagazineCards = positionMagazineCards - positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnRigth.classList.remove("button-arrow_state_disabled");
  } else if (positionMagazineCards <= positionMagazineShift) {
    positionMagazineCards = positionMagazineCards - positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnLeft.classList.add("button-arrow_state_disabled");
  }
});
