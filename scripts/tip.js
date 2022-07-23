// закрытие мини попапа
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
