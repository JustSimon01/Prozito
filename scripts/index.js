//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
  } 
  
  //закрыть попап
  function closePopup(popup) {
      popup.classList.remove('popup_opened');
  } 

  const aboutProject = document.querySelector('#aboutProject');
  const headerMenu = document.querySelector('pop-up_menu').closest('.popup');
  console.log(aboutProject);
  console.log(headerMenu);