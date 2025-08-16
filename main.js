const ShareButton = document.querySelector('.ShareButton');
const ShareMenu = document.querySelector('.ShareMenu');

const toggleShareMenu = () => {
  ShareMenu.classList.toggle('ShareMenu--open');
  ShareButton.setAttribute('aria-expanded', ShareMenu.classList.contains('ShareMenu--open'));
}

ShareButton && ShareButton.addEventListener('click', toggleShareMenu);