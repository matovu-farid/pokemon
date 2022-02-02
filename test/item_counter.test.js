import {
  jest, expect, it, beforeEach, describe,
} from '@jest/globals';
import Api from '../src/modules/api.js';
import 'regenerator-runtime/runtime';
import { displayItems } from '../src/modules/display_list_items';

import '../src/modules/append_no_of_likes.js';

jest.mock('../src/modules/api.js');
jest.mock('../src/modules/append_no_of_likes.js');

describe('The counter', () => {
  document.body.innerHTML = `
  <span id="count"></span>
  <section class="centered-column">
          <ul id="display-items">
          </ul>
      </section>
  `;
  beforeEach(() => {
    document.body.innerHTML = `
  <span id="count"></span>
  <section class="centered-column">
          <ul id="display-items">
          </ul>
      </section>
  `;
  });

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

  it('should the value of (3) when displayItems is called', async () => {
    await displayItems();
    const displayList = document.querySelector('#display-items');
    expect(displayList.children.length).toBe(3);
    const count = document.querySelector('#count');
    expect(count.innerHTML).toBe('(3)');
  });
});
