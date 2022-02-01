import Api from './api';
import { appendListItem } from './create_listhtml';

const displayItems = async () => {
  const api = new Api();
  const displayItems = await api.getDisplayItems();
  displayItems.forEach(appendListItem);
};

displayItems();