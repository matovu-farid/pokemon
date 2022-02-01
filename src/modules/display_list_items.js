import Api from './api';
import { appendCount } from './counter';
import { appendListItem } from './create_listhtml';

const displayItems = async () => {
  const api = new Api();
  const displayItems = await api.getDisplayItems();
  displayItems.forEach(appendListItem);
  appendCount();
};

displayItems();