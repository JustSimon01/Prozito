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
    playButton.classList.add("player__play-button_pause") ;
    audio.play();
}
//Pause
function pauseAudio() {
    palyer.classList.remove('play');
    playButton.classList.remove("player__play-button_pause") ;
    audio.pause();
}
//событие на кнопку Play-Pause
playButton.addEventListener('click',() => {
    const isPlaying = palyer.classList.contains('play');
    if (isPlaying) {
        pauseAudio()
    } else{
        playAudio();
    }
})

//кнопка переключения на следующий трек
function nextTrack(){
    trackIndex++
    if (trackIndex >tracks.length - 1){
        trackIndex = 0
    }
    loadAudio(tracks[trackIndex])
    playAudio()
}
forward.addEventListener('click', nextTrack)

//кнопка переключения на предыдущий трек
function prevTrack(){
    trackIndex--
    if (trackIndex < 0){
        trackIndex = tracks.length - 1
    }
    loadAudio(tracks[trackIndex])
    playAudio()
}
back.addEventListener('click', prevTrack)

//подвязываем прогресс бар к длинне трека
function updateProgress (e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    if (progressPercent === 100){
    pauseAudio()
}
}
audio.addEventListener('timeupdate', updateProgress);

//изменение прогресс бара
function setProgress (e){
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

//громкость
const volume = document.querySelector('.player__volume-bar');
const volumeButton = document.querySelector('.player__volume-button');

volume.addEventListener('input', function(){
    let volumeValue = volume.value;
    let color = 'linear-gradient(90deg, rgb(50, 50, 50)' + volumeValue +'%, rgb(50, 50, 50, 0.4)' + volumeValue +'%)';
    volume.style.background = color;
    audio.volume = volumeValue / 100;
})

//открытие-закрытие ползунка громкости
volumeButton.addEventListener('click', function(){
    if (volume.classList.contains('player__volume-bar_opend') === true){
        volume.classList.remove('player__volume-bar_opend');
    }else{    
    volume.classList.add('player__volume-bar_opend');
    }
})

//время проигрывания трека

audio.addEventListener('timeupdate', (e)=>{
    const currentTime = e.target.currentTime;
    let audioTime = document.querySelector('.player__time');
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec <10){
        currentSec = `0${currentSec}`
    }
    if (currentMin <10){
        currentMin = `0${currentMin}`
    }
    audioTime.innerText = `${currentMin}:${currentSec}`;
})