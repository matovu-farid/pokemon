import Api from './api';

const addLikeListener = (heart, id) => {
  heart.addEventListener('click', () => {
    const api = new Api();
    api.like(id);
  });
};
const addNewListener = () => {
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach((heart) => {
    const id = heart.id.match(/\d+/)[0];

    addLikeListener(heart, id);
  });
};

export default addNewListener;
