import Player from '@vimeo/player';
import Colcade from 'colcade';

export default function() {
  const previewModal = document.getElementById('preview-modal');
  const previewClose = document.getElementById('preview-close');
  let vimeoVideo = null;
  let player = null;
  
  // When clickin on a case with a preview,
  // open a fullscreen modal and play a vimeo video 
  const openVideoModal = (e, video) => {
      e.preventDefault();
      const vimeoId = video.dataset.preview;
  
      previewModal.classList.add('preview-modal--open');
  
      vimeoVideo = document.createElement("iframe");
      vimeoVideo.src = `https://player.vimeo.com/video/${vimeoId}?controls=1`;
      vimeoVideo.width ="1920";
      vimeoVideo.height = "1080";
      vimeoVideo.frameborder = "0";
      vimeoVideo.webkitallowfullscreen = true;
      vimeoVideo.mozallowfullscreen = true;
      vimeoVideo.allowfullscreen = true;
      vimeoVideo.allow = "autoplay; encrypted-media";
  
      previewModal.appendChild(vimeoVideo);
  
      player = new Player(vimeoVideo);
      player.play();
  }
  
  const closeVideoModal = (e) => {
      e && e.preventDefault();
      player.pause();
      previewModal.classList.add('preview-modal--fadeout');
      window.setTimeout(() => {
          player.destroy().then(function() {
              previewModal.classList.remove('preview-modal--open');
              previewModal.classList.remove('preview-modal--fadeout');
          }).catch(function(error) {
              console.error('could not destroy preview video when closing modal', error);
          });
      }, 1000)
  }
  
  const previews = [...document.querySelectorAll('[data-preview]')];
  previews.forEach(video => {
      video.addEventListener('click', (e) => openVideoModal(e, video));
  });
  
  previewClose.addEventListener('click', closeVideoModal);
  
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && player) closeVideoModal();
  });
  
  function logKey(e) {
    log.textContent += ` ${e.code}`;
  }

var grid = document.querySelector('.workgrid');

var colc = new Colcade( grid, {
  columns: '.workgrid__column',
  items: '.workgrid__box'
});
}
