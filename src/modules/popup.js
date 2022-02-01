import { selector, selectorAll } from './tools.js';

selectorAll('.popup-open, .popup-close').forEach((element) => {
  element.addEventListener('click', () => {
    selector('.popup-modal').classList.toggle('popup-hidden');
  });
});
