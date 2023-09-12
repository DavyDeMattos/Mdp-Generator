const poping = {

  init: function() {
    const closeButton = document.querySelector('.popup__close')
    closeButton.addEventListener('click', poping.handleClickOnCloseButton)
    // On attentds quelque secondes avant d'afficher la pop up
    setTimeout(function(){
      poping.popupShow();
    }, 10000);

  },

  popupShow : function() {
    const popupWindow = document.querySelector('.popup');
    popupWindow.classList.add('popup--on');
  },

  handleClickOnCloseButton: function () {
    const popupWindow = document.querySelector('.popup');
    popupWindow.classList.remove('popup--on');
  }
}

document.addEventListener('DOMContentLoaded', poping.init);