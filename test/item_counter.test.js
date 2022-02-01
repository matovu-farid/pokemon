/**
 * @jest-environment jsdom
 */
import { test,jest, expect } from '@jest/globals';
import Api from '../src/modules/api';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { displayItems } from '../src/modules/display_list_items';
//jest.mock('../src/modules/api')



test('test', () => {
    displayItems()
    //expect(Api).toBeCalled()
});
