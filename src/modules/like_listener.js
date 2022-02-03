import api from './api';
import appendNoOFLikes from './append_no_of_likes';

const addLikeListener = (heart, id) => {
  heart.addEventListener('click', async () => {
    await api.like(id);
    const likes = await api.getLikes();
    appendNoOFLikes(likes);
  });
};
const likeListener = () => {
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach((heart) => {
    const id = heart.id.match(/\d+/)[0];
    addLikeListener(heart, id);
  });
};

export default likeListener;
