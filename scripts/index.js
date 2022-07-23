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


//3dслайдер, свайп
const cardsBlock = document.querySelector('.media__content-cards-block-mobile')
//ограничиваем работу свайпа блоком слайдера
cardsBlock.addEventListener('touchstart', handleTouchStart, false);
cardsBlock.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y = null;
//определяем точку качания
function handleTouchStart(event) {
const firstTouch = event.touches[0];
x1 = firstTouch.clientX;
y1 = firstTouch.clientY;
}
//определяем куда идет свайп лево или право, если пользоватяль тянет вверх\вниз, то не переключаем
function handleTouchMove(event) {
    if (!x1 || !y1) {
       return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if(Math.abs(xDiff) > Math.abs(yDiff)){
      if (xDiff>0){
        console.log('right');
        nextSlide();
    }else{
        console.log('left');
        prevSlide();
    }
}
x1=null;
y1=null;
}
//находим массив карточек привязанных к радио-кнопкам
let arrRadio = document.querySelectorAll('.radio');
//задаем стартовую карточку
let activeSlide = 0;
//функция следующая карточка (свайпаем вправо, карточка уходит на позицию вправо)
function prevSlide(){
    activeSlide++;
    if (activeSlide>4){
        activeSlide=0;
        arrRadio[activeSlide].checked = !0;
        console.log(activeSlide);
        return activeSlide;
    }if (activeSlide>=0) {
        arrRadio[activeSlide].checked = !0;
        console.log(activeSlide);
        return activeSlide;
    }
}
//функция следующая карточка (свайпаем влево, карточка уходит на позицию влево)
function nextSlide(){
    activeSlide--;
    if (activeSlide<0){
        activeSlide=4;
        arrRadio[activeSlide].checked = !0;
        console.log(activeSlide);
        return activeSlide;
    }if (activeSlide>=0) {
        arrRadio[activeSlide].checked = !0;
        console.log(activeSlide);
        return activeSlide;
    }
}
