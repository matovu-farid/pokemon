import { selector, selectorAll } from './tools.js';

export const popupInit = () => {
  selectorAll('button[id^="comment-"], .popup-close').forEach((element) => {
    element.addEventListener('click', () => {
      selector('.popup-modal').classList.toggle('popup-hidden');
    });
  });
};
