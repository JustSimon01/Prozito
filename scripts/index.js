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
      newsBtnLeft.classList.remove("button-circular_state_disabled");
    } else if ((positionNewsCards = newsCards.offsetWidth)) {
      positionNewsCards = positionNewsCards + positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnRigth.classList.add("button-circular_state_disabled");
    }
  });
  
 newsBtnLeft.addEventListener("click", () => {
    if (positionNewsCards > positionNewsShift) {
      positionNewsCards = positionNewsCards - positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnRigth.classList.remove("button-circular_state_disabled");
    } else if (positionNewsCards <= positionNewsShift) {
      positionNewsCards = positionNewsCards - positionNewsShift;
      newsCards.scrollTo(positionNewsCards, 0);
      newsBtnLeft.classList.add("button-circular_state_disabled");
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
    magazineBtnLeft.classList.remove("button-circular_state_disabled");
  } else if ((positionMagazineCards = magazineCards.offsetWidth)) {
    positionMagazineCards = positionMagazineCards + positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnRigth.classList.add("button-circular_state_disabled");
  }
});

magazineBtnLeft.addEventListener("click", () => {
  if (positionMagazineCards > positionMagazineShift) {
    positionMagazineCards = positionMagazineCards - positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnRigth.classList.remove("button-circular_state_disabled");
  } else if (positionMagazineCards <= positionMagazineShift) {
    positionMagazineCards = positionMagazineCards - positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnLeft.classList.add("button-circular_state_disabled");
  }
});