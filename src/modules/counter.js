const getCount = (selector) => document.querySelectorAll(selector).length;

const countAndDisplay = (countItems, displayItem) => {
  document.querySelector(displayItem).textContent = `(${getCount(countItems)})`;
};

export const appendCount = () => {
  countAndDisplay('#display-items > li', '#count');
};

export const appendCountComment = () => {
  countAndDisplay('.pokemon-comments > li', '#nb-comments');
};
