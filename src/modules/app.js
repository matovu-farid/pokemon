import api from './api';
import { appendListItem } from './create_listhtml';
import './like_listener';
//import './load_pokemon';

import likeListener from './like_listener';
import appendNoOFLikes from './append_no_of_likes';
//import { appendCount } from './counter';
import { popupInit } from './popup';

export const displayItems = async () => {
  const displayItems = await api.getDisplayItems();
  displayItems.forEach(appendListItem);
  //appendCount();
  popupInit(api);
  likeListener();
  const likes = await api.getLikes();
  appendNoOFLikes(likes);
};

export const displayLess = async () => {
  if (api.POCKEMON_COUNT > 6) {
    api.POCKEMON_COUNT -= 6;
    const list = document.querySelectorAll('#display-items>li');

    Array.from(list)
      .slice(list.length - 6, list.length)
      .forEach((node) => node.remove());
    appendCount();
  }
};

export default displayItems;
