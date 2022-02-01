export default class Api {
  POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

  APP_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  COMMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EtP7GW5T9AWxrJLgrSBm/comments';

  #fetchResults = async () => {
    const { results } = await (await fetch(`${this.POKEMON_URL}?limit=6&offset=0`)).json();
    return results;
  };

  #fetchPockemon = async (url) => {
    const result = {};
    const data = await (await fetch(url)).json();
    result.url = data.sprites.other.dream_world.front_default;
    result.id = data.id;
    result.name = data.name;
    result.height = data.height;
    result.weight = data.weight;
    return result;
  };

  getDisplayItems = async () => {
    const promises = [];
    const results = await this.#fetchResults();
    results.forEach((result) => {
      promises.push(this.#fetchPockemon(result.url));
    });
    const items = await Promise.all(promises);
    return items;
  };

  getPokemonFromId = async (idPokemon) => {
    const data = await this.#fetchPockemon(`${this.POKEMON_URL}/${idPokemon}`);
    return data;
  };

  getComments = async (idPokemon) => {
    const response = await fetch(`${this.COMMENT_URL}?item_id=${idPokemon}`);
    if ((response.status && response.status === 500) || response.status === 400) {
      return [];
    }
    const data = await response.json();
    return data.error ? [] : data;
  };

  getNbComments = async (idPokemon) => {
    const response = await fetch(`${this.COMMENT_URL}?item_id=${idPokemon}`);
    if ((response.status && response.status === 500) || response.status === 400) {
      return 0;
    }
    const data = await response.json();
    return data.error ? 0 : data.length;
  };

  registerNewApp = async () => {
    const response = await fetch(this.APP_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Pokemon_Farid_Jihane',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.text();
    return data;
  };

  addComment = async (idPokemon, userName, userComment) => {
    const response = await fetch(`${this.COMMENT_URL}/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: idPokemon,
        username: userName,
        comment: userComment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.text();
    return data;
  };
}
