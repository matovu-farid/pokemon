export const listHtml = (result) => `
    <img src="${result.url}" alt="image">
     <button id="comment-${result.id}">Comments</button>
     <p id="name-${result.id}">${result.name} 
     <i id="off-${result.id}" class="fa fa-heart-o heart" aria-hidden="true"></i></p> 
    `;

export const appendListItem = (result) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = listHtml(result);
  listItem.className = 'centered-column';
  const displayItems = document.querySelector('#display-items');
  displayItems.append(listItem);
};
