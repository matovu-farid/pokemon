const appendNoOFLike = (id, likeNumber) => {
  document.querySelector(`#likes-${id}`)
    .innerHTML = `${likeNumber} likes`;
};

const appendNoOFLikes = (likesArray = []) => {
  likesArray
};

export default appendNoOFLikes;