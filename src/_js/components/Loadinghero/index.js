import gsap from 'gsap';

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
      document.addEventListener('DOMContentLoaded', fn);
  }
}

var initLoadingHero = function(){
  document.body.classList.add('content-loaded');
  var tl = gsap.timeline({delay: 0.5});
  var animLength = 3;
  tl
    .add('out', animLength)
    .to('.loadinghero__heading', 0.6, { opacity: 0, y: '-5vh', delay: 0, ease: "back.in(3)" }, 'out')
    .to('.loadinghero', 0.4, {height: 0, ease: "power4.easeOut", delay: 0.7}, 'out');     

  tl.eventCallback("onComplete", () => {
    document.querySelector('.loadinghero').remove();
    // document.querySelectorAll('.loadinghero__video').forEach(vid => vid.pause());
  });
}

ready(initLoadingHero);
