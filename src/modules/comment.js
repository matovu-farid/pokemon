import { selector } from './tools.js';
import api from './api';
import { appendCommentItem } from './create_listcomment';
import { appendCountComment } from './counter';

const form = selector('form');

selector('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  if (form.username.value.trim() === '') {
    selector('small').innerHTML = 'Please provide your name';
    form.username.focus();
  } else if (form.comment.value.trim() === '') {
    selector('small').innerHTML = 'Please provide a message';
    form.comment.focus();
  } else {
    await api.addComment(form.idPokemon.value, form.username.value, form.comment.value);

    const today = new Date();

    appendCommentItem({
      creation_date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
      username: form.username.value,
      comment: form.comment.value,
    });
    appendCountComment();
    form.reset();
    const commentsDiv = document.querySelector('.pokemon-comments');

    commentsDiv.scroll(0, commentsDiv.scrollHeight);
  }
});
