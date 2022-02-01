import { selector, selectorAll } from './tools.js';
import { appendCommentItem } from './create_listcomment';

export const popupInit = (connector) => {
  selectorAll('button[id^="comment-"], .popup-close').forEach((element) => {
    element.addEventListener('click', async (event) => {
      if (selector('.popup-modal').classList.contains('popup-hidden')) {
        const idPokemon = event.target.id.match(/\d+/g)[0];
        const pokemon = await connector.getPokemonFromId(idPokemon);
        selector('#pokemon_name').innerHTML = pokemon.name;
        selector('#pokemon_image').src = pokemon.url;
        selector('#pokemon_height').innerHTML = pokemon.height;
        selector('#pokemon_weight').innerHTML = pokemon.weight;

        const comments = await connector.getComments(idPokemon);
        comments.forEach(appendCommentItem);
        selector('#idPokemon').value = idPokemon;
      }
      selector('.popup-modal').classList.toggle('popup-hidden');
    });
  });
};

export default popupInit;
