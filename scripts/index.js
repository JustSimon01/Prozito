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
button.addEventListener('mouseover', function(){
    if (menuList.classList.contains('pop-up_opened')){
        menuList.classList.remove('pop-up_opened');
        button.style.borderBottom = '';
 
    }else{
        menuList.classList.add('pop-up_opened');
        button.style.borderBottom = `1px solid #323232`;
    }
});

//открытие меню, бургер
const menuBurgerButton = document.querySelector('.header__menu-icon');
const menuPopup = document.querySelector('.header__menu-mobile');
const menuPopupCloseButton = document.querySelector('.header__menu-icon_close');

menuBurgerButton.addEventListener('click', function(){
    menuPopup.classList.add('pop-up_opened');
});

menuPopupCloseButton.addEventListener('click', function(){
    menuPopup.classList.remove('pop-up_opened');
});

//закрытие меню при переходе по ссылке
const menuBurgerLinks = document.querySelectorAll('.header__mobile-menu-element');
menuBurgerLinks.forEach (function(btn) {
btn.addEventListener('click', function(){
  menuPopup.classList.remove('pop-up_opened');
});
});

//мини-попап на заглавной (закрытие. поумолчанию открыт)
const popupMini = document.querySelector('.mini-pop-up');
const buttonMiniPopupClose = document.querySelector('.button-close');

buttonMiniPopupClose.addEventListener('click', function() {
    popupMini.classList.remove('pop-up_opened');
});


const cards = document.querySelector('media__content-cards');


//3dслайдер, свайп (заработал в firefox)
const cardsBlock = document.querySelector('.slider-3d')
//ограничиваем работу свайпа блоком слайдера
cardsBlock.addEventListener('touchstart', handleTouchStart);
cardsBlock.addEventListener('touchmove', handleTouchMove);

let x1 = null;
let y1 = null;
//определяем точку качания
function handleTouchStart(event) {
const firstTouch = event.touches[0];
x1 = firstTouch.clientX;
y1 = firstTouch.clientY;
}
//определяем куда идет свайп лево или право, если пользоватяль тянет вверх\вниз, то не переключаем
function handleTouchMove(event) {
    if (!x1 || !y1) {
       return false;}

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
//материалы
const dots = document.querySelectorAll('.diary__navigation-item');
const slides = document.querySelectorAll('.diary__card');
const sliderContainer = document.querySelector('.diary__card-container');

const startPoint = 0;
let finishPoint = sliderContainer.offsetWidth;
let lastScrollPosition = 0;
let index = 0;

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('diary__navigation-item_state_active');
    }
    dots[n].classList.add('diary__navigation-item_state_active')
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      activeDot(index);

      slides[indexDot].scrollIntoView({block: "center", inline: "center"});
    })
})

sliderContainer.addEventListener('scroll', () => {
  lastScrollPosition = sliderContainer.scrollLeft;

  if(lastScrollPosition <= 44) {
    activeDot(0)
  }

  if (lastScrollPosition >= 180 && lastScrollPosition <= 320) {
    activeDot(1)
  }
  
  if (lastScrollPosition >= 344) {
    activeDot(2)
  }
})


//карточки новостей, стрелки + слайд

const newsBtnRigth = document.getElementById('button-news-rigth');
const newsBtnLeft = document.getElementById('button-news-left');
const newsCards = document.querySelector('.media__content-cards_news');

let positionNewsCards = 0;

newsCards.addEventListener('scroll', function(e) {
  positionNewsCards = newsCards.scrollLeft;
let positionNewsShift = newsCards.offsetWidth;
let full = newsCards.scrollWidth;
if (positionNewsCards>=0){
  newsBtnLeft.classList.add("button-arrow_state_disabled");
  newsBtnRigth.classList.remove("button-arrow_state_disabled");
}
if (positionNewsCards>=1){
  newsBtnLeft.classList.remove("button-arrow_state_disabled");
  newsBtnRigth.classList.remove("button-arrow_state_disabled");
}
if (positionNewsCards >= full - positionNewsShift){
  newsBtnLeft.classList.remove("button-arrow_state_disabled");
  newsBtnRigth.classList.add("button-arrow_state_disabled");
}

});

newsBtnRigth.addEventListener("click", () => {
  let positionNewsShift = newsCards.offsetWidth;
  let full = newsCards.scrollWidth;
  if (positionNewsCards >= full - positionNewsShift) {
    positionNewsCards = full;
    newsBtnRigth.classList.add("button-arrow_state_disabled");
  }
  if (positionNewsCards >= 0) {
    positionNewsCards = positionNewsCards + positionNewsShift;
    newsCards.scrollTo(positionNewsCards, 0);
    newsBtnLeft.classList.remove("button-arrow_state_disabled");
  }
});

newsBtnLeft.addEventListener("click", () => {
  let positionNewsShift = newsCards.offsetWidth;
  let full = newsCards.scrollWidth;
  if (positionNewsCards >= full || positionNewsCards > 0) {
    positionNewsCards = positionNewsCards - positionNewsShift;
    newsCards.scrollTo(positionNewsCards, 0);
    newsBtnRigth.classList.remove("button-arrow_state_disabled");
  }
  if (positionNewsCards <= 0) {
    positionNewsCards = 0;
    newsCards.scrollTo(positionNewsCards, 0);
    newsBtnLeft.classList.add("button-arrow_state_disabled");
  }
});

//карточки магазина, стрелки + слайд
const magazineBtnRigth = document.getElementById("button-magazine-right");
const magazineBtnLeft = document.getElementById("button-magazine-left");
const magazineCards = document.querySelector(".media__content-cards_magazine");

let positionMagazineCards = 0;

magazineCards.addEventListener('scroll', function(e) {
positionMagazineCards = magazineCards.scrollLeft;
let positionMagazineShift = magazineCards.offsetWidth;
let full = magazineCards.scrollWidth;
if (positionMagazineCards>=0){
  magazineBtnLeft.classList.add("button-arrow_state_disabled");
  magazineBtnRigth.classList.remove("button-arrow_state_disabled");
}
if (positionMagazineCards>=1){
  magazineBtnLeft.classList.remove("button-arrow_state_disabled");
  magazineBtnRigth.classList.remove("button-arrow_state_disabled");
}
if (positionMagazineCards >= full - positionMagazineShift){
  magazineBtnLeft.classList.remove("button-arrow_state_disabled");
  magazineBtnRigth.classList.add("button-arrow_state_disabled");
}

});

magazineBtnRigth.addEventListener("click", () => {
  let positionMagazineShift = magazineCards.offsetWidth;
  let full = magazineCards.scrollWidth;
  if (positionMagazineCards >= full - positionMagazineShift) {
    positionMagazineCards = full;
    magazineBtnRigth.classList.add("button-arrow_state_disabled");
  }
  if (positionMagazineCards >= 0) {
    positionMagazineCards = positionMagazineCards + positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnLeft.classList.remove("button-arrow_state_disabled");
  }
});

magazineBtnLeft.addEventListener("click", () => {
  let positionMagazineShift = magazineCards.offsetWidth;
  let full = magazineCards.scrollWidth;
  if (positionMagazineCards >= full || positionMagazineCards > 0) {
    positionMagazineCards = positionMagazineCards - positionMagazineShift;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnRigth.classList.remove("button-arrow_state_disabled");
  }
  if (positionMagazineCards <= 0) {
    positionMagazineCards = 0;
    magazineCards.scrollTo(positionMagazineCards, 0);
    magazineBtnLeft.classList.add("button-arrow_state_disabled");
  }
});