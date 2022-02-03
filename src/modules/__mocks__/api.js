export default class Api {
  getDisplayItems = () => Promise.resolve([
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

  getLikes = () => Promise.resolve([
    {
      likes: 5,
      item_id: 'item1',
    },
  ]);

  getComments = () => Promise.resolve([
    {
      comment: 'This is my favorite pokemon.',
      username: 'Noemi',
      creation_date: '2022-02-02',
    },
  ]);

  getPokemonFromId = async () => ({

  });
}
