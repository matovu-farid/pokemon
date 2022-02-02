const appendNoOFLike = (id, likeNumber) => {
  const likeHtml = document.querySelector(`#likes-${id}`);
  likeHtml.innerHTML = `${likeNumber} likes`;
};

const appendNoOFLikes = (likesArray = []) => {
  const likeNodes = document.querySelectorAll('.like');

  likeNodes.forEach((node) => {
    const id = node.id.match(/\d+/)[0];
    const { likes } = likesArray.find((obj) => obj.item_id === id);
    appendNoOFLike(id, likes);
  });
};

export default appendNoOFLikes;