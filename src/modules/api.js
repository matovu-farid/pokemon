export default class Api {
    #fetchResults= async () => {
      const { results } = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=10')).json();
      return results;
    }

    #fetchPockemon=async (url) => {
      const result = {};
      const data = await (await fetch(url)).json();
      result.url = data.sprites.other.dream_world.front_default;
      result.id = data.id;
      return result;
    }

    getDisplayItems = async () => {
      const promises = [];
      const results = await this.#fetchResults();
      results.forEach((result) => {
        promises.push(this.#fetchPockemon(result.url));
      });
      const items = await Promise.all(promises);
      return items;
    }
}