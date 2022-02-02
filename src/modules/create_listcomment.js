export const listComment = (comment) => `${comment.creation_date} ${comment.username} : ${comment.comment} `;

export const appendCommentItem = (comment) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = listComment(comment);
  const displayItems = document.querySelector('.pokemon-comments');
  displayItems.append(listItem);
};
