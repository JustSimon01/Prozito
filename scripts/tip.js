// закрытие мини попапа типовая страница
const miniPopup = document.querySelector('.notion')
const popupTip = document.querySelector('.chapters')
const popupTipOpen = document.querySelector('.chapter')
const miniPopupClose = document.querySelector('.tip-close')
const popupTipClose = document.querySelector('#popup-close')

miniPopupClose.addEventListener('click', function () {
    miniPopup.classList.remove('pop-up_opened');
});

popupTipClose.addEventListener('click', function () {
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

menuBurgerButton.addEventListener('click', function () {
    menuPopup.classList.add('pop-up_opened');
});

menuPopupCloseButton.addEventListener('click', function () {
    menuPopup.classList.remove('pop-up_opened');
});
//Плеер
const palyer = document.querySelector('.player');
const playButton = document.querySelector('.player__play-button');
const back = document.querySelector('.player__back-button');
const forward = document.querySelector('.player__forward-button');
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.player__progress-container');
const progressBar = document.querySelector('.player__progress-bar');

//название треков, треки в папке audio
const tracks = ['1564_Rodoman'];
//песня по умолчанию
let trackIndex = 0;

//загрузка песни
function loadAudio(track) {
    audio.src = `audio/${track}.mp3`;
}
loadAudio(tracks[trackIndex]);

//Play
function playAudio() {
    palyer.classList.add('play');
    playButton.classList.add("player__play-button_pause");
    audio.play();
}
//Pause
function pauseAudio() {
    palyer.classList.remove('play');
    playButton.classList.remove("player__play-button_pause");
    audio.pause();
}
//событие на кнопку Play-Pause
playButton.addEventListener('click', () => {
    const isPlaying = palyer.classList.contains('play');
    if (isPlaying) {
        pauseAudio()
    } else {
        playAudio();
    }
})

//кнопка переключения на следующий трек
function nextTrack() {
    trackIndex++
    if (trackIndex > tracks.length - 1) {
        trackIndex = 0
    }
    loadAudio(tracks[trackIndex])
    playAudio()
}
forward.addEventListener('click', nextTrack)

//кнопка переключения на предыдущий трек
function prevTrack() {
    trackIndex--
    if (trackIndex < 0) {
        trackIndex = tracks.length - 1
    }
    loadAudio(tracks[trackIndex])
    playAudio()
}
back.addEventListener('click', prevTrack)

//подвязываем прогресс бар к длинне трека
function updateProgress(e) {
    const {
        duration,
        currentTime
    } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    if (progressPercent === 100) {
        pauseAudio()
    }
}
audio.addEventListener('timeupdate', updateProgress);

//изменение прогресс бара
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

//громкость
const volume = document.querySelector('.player__volume-bar');
const volumeButton = document.querySelector('.player__volume-button');

volume.addEventListener('input', function () {
    let volumeValue = volume.value;
    let color = 'linear-gradient(90deg, rgb(50, 50, 50)' + volumeValue + '%, rgb(50, 50, 50, 0.4)' + volumeValue + '%)';
    volume.style.background = color;
    audio.volume = volumeValue / 100;
})

//открытие-закрытие ползунка громкости
volumeButton.addEventListener('click', function () {
    if (volume.classList.contains('player__volume-bar_opend') === true) {
        volume.classList.remove('player__volume-bar_opend');
    } else {
        volume.classList.add('player__volume-bar_opend');
    }
})

//время проигрывания трека

audio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    let audioTime = document.querySelector('.player__time');
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    if (currentMin < 10) {
        currentMin = `0${currentMin}`
    }
    audioTime.innerText = `${currentMin}:${currentSec}`;
})
// Слайдер
function slider() {
    const images = document.querySelectorAll('.slider__image');
    const sliderLine = document.querySelector('.slider__line');
    const sliderMobileNext = document.querySelector('.slider__button_type_mobile-next');
    const sliderMobilePrev = document.querySelector('.slider__button_type_mobile-prev');
    const sliderDesktopNext = document.querySelector('.slider__button_type_desktop-next');
    const sliderDesktopPrev = document.querySelector('.slider__button_type_desktop-prev');
    const sliderCounter = document.querySelector('.slider__counter');

    let count = 0;
    let width;

    function countText() {
        sliderCounter.textContent = `${count + 1} / ${images.length}`;
    }

    countText();

    function init() {
        width = document.querySelector('.slider__area').offsetWidth + 1;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        })

        rollSlider();
    }

    window.addEventListener('resize', init)
    init();

    function nextSlide(nextBtn, prevBtn) {
        count++;
        if (count >= images.length - 1) {
            nextBtn.setAttribute('disabled', 'disabled');
            nextBtn.style.opacity = '.4';
        }
        if (count >= 1) {
            prevBtn.removeAttribute('disabled');
            prevBtn.style.opacity = '1';
        }
        rollSlider();
        countText();
    }

    function prevSlide(nextBtn, prevBtn) {
        count--;
        if (count === 0) {
            prevBtn.setAttribute('disabled', 'disabled');
            prevBtn.style.opacity = '.4';
        }
        if (count >= 1) {
            nextBtn.removeAttribute('disabled');
            nextBtn.style.opacity = '1';
        }
        rollSlider();
        countText();
    }
    sliderMobileNext.addEventListener('click', () => {
        nextSlide(sliderMobileNext, sliderMobilePrev);
    });

    sliderMobilePrev.addEventListener('click', () => {
        prevSlide(sliderMobileNext, sliderMobilePrev);
    });

    sliderDesktopNext.addEventListener('click', () => {
        nextSlide(sliderDesktopNext, sliderDesktopPrev);
    });

    sliderDesktopPrev.addEventListener('click', () => {
        prevSlide(sliderDesktopNext, sliderDesktopPrev);
    });

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}

slider();