import gsap from 'gsap';

var initLoadingHero = function(){
  document.body.classList.add('content-loaded');

  const animLength = 3;
  const heading = gsap.to('#loadinghero-header', { duration: 0.6, delay: animLength, opacity: 0, y: -500, ease: "back.in(1.3)" });
  const wrapper = gsap.to('.loadinghero', { duration: 0.6, delay: animLength + 0.4, height: 0, ease: "power4.easeOut" });     
  heading.play();
  wrapper.play();
}

document.querySelector('.loadinghero').addEventListener('load', (event) => {
  initLoadingHero();
});
