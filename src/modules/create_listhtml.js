export const listHtml = (result) => `
    <img src="${result.url}" alt="image">
    <p class="pokemon-name" id="name-${result.id}">${result.name} 
    <i id="off-${result.id}" class="fa fa-heart-o heart" aria-hidden="true"></i></p> 
    <p class="like" id="likes-${result.id}"></p>
    <button id="comment-${result.id}">Comments</button>
    `;

export const appendListItem = (result) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = listHtml(result);
  listItem.classList.add(...['centered-column', 'card']);
  const displayItems = document.querySelector('#display-items');
  displayItems.append(listItem);
};
