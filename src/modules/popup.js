import { selector, selectorAll } from './tools.js';

export const popupInit = (connector) => {
  selectorAll('button[id^="comment-"], .popup-close').forEach((element) => {
    element.addEventListener('click', async (event) => {
      if (selector('.popup-modal').classList.contains('popup-hidden')) {
        const pokemon = await connector.getPokemonFromId(event.target.id.match(/\d+/g)[0]);
        selector('#pokemon_name').innerHTML = pokemon.name;
        selector('#pokemon_image').src = pokemon.url;
        selector('#pokemon_height').innerHTML = pokemon.height;
        selector('#pokemon_weight').innerHTML = pokemon.weight;
      }
      selector('.popup-modal').classList.toggle('popup-hidden');
    });
  });
};

export default popupInit;
