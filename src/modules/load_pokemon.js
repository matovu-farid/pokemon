import { displayItems, displayLess } from './display_list_items';

const loadMore = () => {
  const loadMore = document.querySelector('#load-more');
  loadMore.addEventListener('click', () => {
    displayItems();
  });
};

loadMore();

const showLess = () => {
  const less = document.querySelector('#show-less');
  less.addEventListener('click', () => {
    displayLess();
  });
};

showLess();