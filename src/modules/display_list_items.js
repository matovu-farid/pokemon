import Api from './api';
import { appendListItem } from './create_listhtml';

export const displayItems = async () => {
  const api = new Api();
  const displayItems = await api.getDisplayItems();
  return displayItems.forEach(appendListItem);
};

displayItems();

export default displayItems;