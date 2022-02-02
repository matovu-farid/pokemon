import Api from './api';
import appendNoOFLikes from './append_of_likes';

const addLikeListener = (heart, id) => {
  heart.addEventListener('click', async () => {
    const api = new Api();
    await api.like(id);
    const likes = await api.getLikes();
    appendNoOFLikes(likes);
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
