export const getCount = () => {
  const listItems = document.querySelectorAll('#display-items > li');
  return listItems.length;
};

export const appendCount = () => {
  const count = document.querySelector('#count');
  count.textContent = `(${getCount()})`;
};
