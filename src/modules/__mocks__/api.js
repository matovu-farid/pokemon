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
      return Promise.resolve(
        [
          {
              "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
              "id": 11
          },
          {
              "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
              "id": 12
          },
          {
              "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
              "id": 13
          },
          {
              "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
              "id": 14
          },
          {
              "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
              "id": 15
          },
          {
              "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
              "id": 16
          }
      ]
      )
    }
}