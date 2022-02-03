export const listComment = (comment) => `<span class="date">${comment.creation_date} </span><span class="username">${comment.username} :</span><span class="comment"> ${comment.comment} `;

export const appendCommentItem = (comment) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = listComment(comment);
  const displayItems = document.querySelector('.pokemon-comments');
  displayItems.append(listItem);
};
