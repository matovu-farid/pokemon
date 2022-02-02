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

    getLikes = () => Promise.resolve(
      [
        {
          "likes": 5,
          "item_id": "item1"
      }
      ]
    );
    getDisplayItems = () => Promise.resolve(
      [
        {
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg',
          id: 11,
        },
        {
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg',
          id: 12,
        },
        {
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg',
          id: 13,
        },

      ],
    )
}