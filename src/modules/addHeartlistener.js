const addToggleListener = (heart, id) => {
  heart.addEventListener('click', () => {
    heart.classList.add('no-display');

    if (heart.classList.contains('clicked')) {
      const heartOff = document.querySelector(`#off-${id}`);
      heartOff.classList.remove('no-display');
    } else {
      const heartOn = document.querySelector(`#on-${id}`);

      heartOn.classList.remove('no-display');
    }
  });
};

export default addToggleListener;
