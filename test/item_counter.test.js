import {
  jest, expect, it,
} from '@jest/globals';
import Api from '../src/modules/api.js';
import 'regenerator-runtime/runtime';
import { displayItems } from '../src/modules/display_list_items';

jest.mock('../src/modules/api.js');

it('should mock the api', () => {
  const api = new Api();

  expect(api.getDisplayItems()).resolves.toEqual([
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
});

document.body.innerHTML = `
<section class="centered-column">
        <ul id="display-items">
        </ul>
    </section>
`;

it.only('should return three child nodes for the displayList', () => {
  const api = new Api();
  expect(displayItems(api)).resolves.toBeUndefined();
  const displayList = document.querySelector('#display-items');
  expect(displayList.children.length).toBe(3);
});
