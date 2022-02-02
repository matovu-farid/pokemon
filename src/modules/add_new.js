import addToggleListener from "./addHeartlistener";
import Api from "./api";

const addLikeListener = (heart,id)=>{
heart.addEventListener('click',()=>{
    const api = new Api();
    const name = document.querySelector(`#name-${id}`).textContent.match(/\w+/)[0]
    console.log('name',name)
    api.like(name)
})
}
const addNewListener = () => {
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach((heart) => {
    const id = heart.id.match(/\d+/)[0];
    addToggleListener(heart,id)
     addLikeListener(heart,id)
  });
};

export default addNewListener;
