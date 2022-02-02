const appendNoOFLike = (id, likeNumber) => {
  document.querySelector(`#likes-${id}`)
    .innerHTML = `${likeNumber} likes`;
};

const appendNoOFLikes = (likesArray = []) => {
  document.querySelectorAll('.like').forEach((node) => {
    const id = node.id.match(/\d+/)[0];
    const { likes } = likesArray.find((obj) => obj.item_id === id);
    appendNoOFLike(id, likes);
  });
};

export default appendNoOFLikes;