export default class Api {
  POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

  #fetchResults = async () => {
    const { results } = await (await fetch(`${this.POKEMON_URL}?limit=6&offset=10`)).json();
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
    const data = await this.#fetchPockemon(`${this.POKEMON_URL}/${idPokemon}/`);
    return data;
  };
}
