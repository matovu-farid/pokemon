import { selector } from './tools.js';
import Api from './api';

const form = selector('form');

selector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const api = new Api();
  await api.addComment(form.idPokemon.value, form.username.value, form.comment.value);
  form.reset();
  selector('.popup-modal').classList.add('popup-hidden');
});
