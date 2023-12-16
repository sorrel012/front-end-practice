'use strict';

class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpMsg = document.querySelector('.pop-up__message');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      hide();
    })
  }

    setClickListener(onClick) {
      this.onClick = onClick;
    }

    hide() {
      this.popUp.classList.add
    }
}