import { selector } from './tools.js';
import Api from './api';
import { appendCommentItem } from './create_listcomment';

const form = selector('form');

selector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const api = new Api();
  await api.addComment(form.idPokemon.value, form.username.value, form.comment.value);

  let today = new Date();

  appendCommentItem({
    creation_date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
    username: form.username.value,
    comment: form.comment.value,
  });
  form.reset();
});
