import fetch from 'cross-fetch';

export default class Api {
  #fetchResults = async () => {
    const { results } = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=10')).json();
    return results;
  };

  #fetchPockemon = async (url) => {
    const result = {};
    const data = await (await fetch(url)).json();
    result.url = data.sprites.other.dream_world.front_default;
    result.id = data.id;
    return result;
  };

  getDisplayItems = () =>
    Promise.resolve([
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
    ]);

  getLikes = () =>
    Promise.resolve([
      {
        likes: 5,
        item_id: 'item1',
      },
    ]);

  // eslint-disable-next-line no-unused-vars
  getComments = (idPokemon) =>
    Promise.resolve([
      {
        comment: 'This is my favorite pokemon.',
        username: 'Noemi',
        creation_date: '2022-02-02',
      },
    ]);

  // eslint-disable-next-line no-unused-vars
  getPokemonFromId = async (idPokemon) => ({
    base_experience: 64,
    forms: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' }],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
    name: 'bulbasaur',
    order: 1,
    past_types: [],
    species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    types: [
      { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
      { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } },
    ],
    weight: 69,
  });
}
