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
const popupMini = document.querySelector('.mini-pop-up');
const buttonMiniPopupClose = document.querySelector('.button-close');

buttonMiniPopupClose.addEventListener('click', function() {
    popupMini.classList.remove('pop-up_opened');
});


// Слайдер 

//Блок Новости и Журнал, прокрутка по кнопкам

const newsBtnRigth = document.querySelector('.button_news_rigth');
const newsBtnLeft = document.querySelector('.button_news_left');
const newsCards = document.querySelector('.news_cards_index');

let positionNewsCards = 0;
let positionNewsShift = newsCards.offsetWidth / 2;

const magazineBtnRigth = document.querySelector(".button_magazine_right");
const magazineBtnLeft = document.querySelector(".button_magazine_left");
const magazineCards = document.querySelector(".magazine__cards_page_index");

let positionMagazineCards = 0;
let positionMagazineShift = magazineCards.offsetWidth / 2;



function cardsMoveRightOuter (pos) {
 positionCards = pos;
return function cardsMoveRight(cardsName, shift, btnLeft, btnRight) {
  if (positionCards < cardsName.offsetWidth) {
    positionCards = positionCards + shift;
    cardsName.scrollTo(positionCards, 0);
    btnLeft.classList.remove("button-arrow_state_disabled");
  } else if (positionCards = cardsName.offsetWidth) {
    positionCards = positionCards + shift;
    cardsName.scrollTo(positionCards, 0);
    btnRight.classList.add("button-arrow_state_disabled");    
  }
}
}

function cardsMoveLeftOuter (pos) {
    positionCards = pos;
 return function cardsMoveLeft(cardsName, shift, btnLeft, btnRight) {
  if (positionCards > shift) {
    positionCards = positionCards - shift;
    cardsName.scrollTo(positionCards, 0);
    btnRight.classList.remove("button-arrow_state_disabled");
  } else if (positionCards <= shift) {
    positionCards = positionCards - shift;
    cardsName.scrollTo(positionCards, 0);
    btnLeft.classList.add("button-arrow_state_disabled");
  }
}
}

const positionNewsCardsOuterRight = cardsMoveRightOuter(positionNewsCards);
const positionNewsCardsOuterLeft = cardsMoveLeftOuter(positionNewsCards);

const positionMagazineCardsOuterRight = cardsMoveRightOuter(positionMagazineCards);
const positionMagazineCardsOuterLeft = cardsMoveLeftOuter(positionMagazineCards);

newsBtnRigth.addEventListener('click', () => positionNewsCardsOuterRight(newsCards, positionNewsShift, newsBtnLeft, newsBtnRigth))
newsBtnLeft.addEventListener('click', () => positionNewsCardsOuterLeft(newsCards, positionNewsShift, newsBtnLeft, newsBtnRigth))

magazineBtnRigth.addEventListener('click', () => positionMagazineCardsOuterRight(magazineCards, positionMagazineShift, magazineBtnLeft, magazineBtnRigth))
magazineBtnLeft.addEventListener('click', () => positionMagazineCardsOuterLeft(magazineCards, positionMagazineShift, magazineBtnLeft, magazineBtnRigth))

const cards = document.querySelector('media__content-cards');


//3dслайдер, свайп
const cardsBlock = document.querySelector('.slider-3d')
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
        changeRight();
    }else{
        changeLeft();
    }
}
x1=null;
y1=null;
}

//новый свайп карточек, как уменьшить - не знаю=(

const card1 = document.querySelector('.slider-3d__card-1')
const card2 = document.querySelector('.slider-3d__card-2')
const card3 = document.querySelector('.slider-3d__card-3')
const card4 = document.querySelector('.slider-3d__card-4')
const card5 = document.querySelector('.slider-3d__card-5')
//отступы карточек по оси x
let n = [0, 15, 30, -30, -15];
//отступы карточек по оси z
let k = [0, -100, -250, -250, -100];

count=0;

function changeRight(){
    let i1 = 0;
    count++;
if (count>4){
    count=0;
    i1=0;
    i2=1;
    i3=2;
    i4=3;
    i5=4;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}if (count<=1){
    i1=1;
    i2=2;
    i3=3;
    i4=4;
    i5=0;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=2){
    i1=2;
    i2=3;
    i3=4;
    i4=0;
    i5=1;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=3){
    i1=3;
    i2=4;
    i3=0;
    i4=1;
    i5=2;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=4){
    i1=4;
    i2=0;
    i3=1;
    i4=2;
    i5=3;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
};


function changeLeft(){
    let i1 = 0;
    count--;
if (count<0){
    count=4;
    i1=4;
    i2=0;
    i3=1;
    i4=2;
    i5=3;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=0){
    i1=0;
    i2=1;
    i3=2;
    i4=3;
    i5=4;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=1){
    i1=1;
    i2=2;
    i3=3;
    i4=4;
    i5=0;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=2){
    i1=2;
    i2=3;
    i3=4;
    i4=0;
    i5=1;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
if (count<=3){
    i1=3;
    i2=4;
    i3=0;
    i4=1;
    i5=2;
    card1.style.transform = `translate3d(${n[i1]}%, 0, ${k[i1]}px)`;
    card2.style.transform = `translate3d(${n[i2]}%, 0, ${k[i2]}px)`;
    card3.style.transform = `translate3d(${n[i3]}%, 0, ${k[i3]}px)`;
    card4.style.transform = `translate3d(${n[i4]}%, 0, ${k[i4]}px)`;
    card5.style.transform = `translate3d(${n[i5]}%, 0, ${k[i5]}px)`;
    return i1, i2, i3, i4, i5;
}
};
