import likeListener from './like_listener';
import Api from './api';
import appendNoOFLikes from './append_of_likes';
import { appendCount } from './counter';
import { appendListItem } from './create_listhtml';
import { popupInit } from './popup';

export const displayItems = async () => {
  const api = new Api();
  const displayItems = await api.getDisplayItems();
  displayItems.forEach(appendListItem);
  appendCount();
  popupInit(api);
  likeListener();
  const likes = await api.getLikes();
  appendNoOFLikes(likes);
  
};

displayItems();

export default displayItems;
