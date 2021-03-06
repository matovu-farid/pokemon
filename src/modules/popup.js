import { selector, selectorAll } from './tools.js';
import { appendCommentItem } from './create_listcomment';
import { appendCountComment } from './counter';

export const popupInit = (connector) => {
  selectorAll('button[id^="comment-"]').forEach((element) => {
    element.addEventListener('click', async (event) => {
      if (selector('.popup-modal').classList.contains('popup-hidden')) {
        selector('body').classList.add('popup-open');
        const idPokemon = event.target.id.match(/\d+/g)[0];
        const pokemon = await connector.getPokemonFromId(idPokemon);
        selector('#pokemon_name').innerHTML = pokemon.name;
        selector('#pokemon_image').src = pokemon.url;
        selector('#pokemon_height').innerHTML = pokemon.height;
        selector('#pokemon_weight').innerHTML = pokemon.weight;
        selector('#idPokemon').value = idPokemon;

        const comments = await connector.getComments(idPokemon);
        if (comments.length > 0) {
          comments.forEach(appendCommentItem);
        } else {
          selector('.pokemon-comments').innerHTML = 'No comment yet.';
        }
        appendCountComment();
        selector('.popup-modal').classList.remove('popup-hidden');
      } else {
        selector('.pokemon-comments').innerHTML = '';
        selector('body').classList.remove('popup-open');
        selector('.popup-modal').classList.add('popup-hidden');
      }
    });
  });

  selector('.popup-close').addEventListener('click', () => {
    selector('body').classList.remove('popup-open');
    selector('.popup-modal').classList.add('popup-hidden');
  });
};

export default popupInit;
