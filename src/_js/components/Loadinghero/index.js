function ready(fn) {
  if (document.readyState != 'loading') {
      fn();
  } else {
      document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){});
  var initLoadingHero = function(){
    var tl = new TimelineMax({delay: 0.5});
    var elementEasing = Power0.easeIn;
    var animLength = 8.1;
    var animDelay = 0.3;
    var fadeAnimLength = 1;
    var animChildStagger = 0.0;

    tl
    .set('.loadinghero__preview1', { scale: 1.1, y: '-40vh' })
    .set('.loadinghero__preview2', { scale: 1.1, y: '-60vh' })
    .set('.loadinghero__preview3', { scale: 1.2, y: '-60vh' })
    .set('.loadinghero__preview4', { scale: 1.3, y: '-110vh' })
    .set('.loadinghero__preview5', { scale: 1.4, y: '-45vh' })
    .set('.loadinghero__preview6', { scale: 0.9, y: '-30vh' })
    .set('.loadinghero__preview7', { scale: 1.2, y: '-98vh' })
    .set('.loadinghero__heading', { opacity: 1 })
    .add('one', '+=0')
      .from('.loadinghero', 0, {}, 'one')
    .add('two', '-=0')
      .from('.loadinghero__heading', 0.8, { opacity: 0, y: '5vh' }, 'two')
    .add('three', '-=1.0')
      .to('.loadinghero__preview1', fadeAnimLength, { opacity: 1, delay: animDelay }, 'three')
      .to('.loadinghero__preview1', animLength, {y: '-70vh', ease: elementEasing, delay: animDelay }, 'three')
      .to('.loadinghero__preview2', fadeAnimLength, { opacity: 1, delay: (animDelay + (animChildStagger * 2)) }, 'three')
      .to('.loadinghero__preview2', animLength - (animChildStagger * 2), {y: '-100vh', ease: elementEasing, delay: (animDelay + (animChildStagger * 2)) }, 'three')
      
      .to('.loadinghero__preview3', fadeAnimLength, { opacity: 1, delay: (animDelay + (animChildStagger * 3)) }, 'three')
      .to('.loadinghero__preview3', animLength - (animChildStagger * 3), {y: '-110vh', ease: elementEasing, delay: (animDelay + (animChildStagger * 3)) }, 'three')
      
      .to('.loadinghero__preview4', fadeAnimLength, { opacity: 1, delay: (animDelay + (animChildStagger * 4)) }, 'three')
      .to('.loadinghero__preview4', animLength - (animChildStagger * 4), {y: '-140vh', ease: elementEasing, delay: (animDelay + (animChildStagger * 4)) }, 'three')

      .to('.loadinghero__preview5', fadeAnimLength, { opacity: 1, delay: (animDelay + (animChildStagger * 5)) }, 'three')
      .to('.loadinghero__preview5', animLength - (animChildStagger * 5), {y: '-100vh', ease: elementEasing, delay: (animDelay + (animChildStagger * 5)) }, 'three')

      .to('.loadinghero__preview6', fadeAnimLength, { opacity: 1, delay: (animDelay + (animChildStagger * 6)) }, 'three')
      .to('.loadinghero__preview6', animLength - (animChildStagger * 6), {y: '-60vh', ease: elementEasing, delay: (animDelay + (animChildStagger * 6)) }, 'three')

      .to('.loadinghero__preview7', fadeAnimLength, { opacity: 1, delay: (animDelay + (animChildStagger * 7)) }, 'three')
      .to('.loadinghero__preview7', animLength - (animChildStagger * 7), {y: '-140vh', ease: elementEasing, delay: (animDelay + (animChildStagger * 7)) }, 'three')
      
      .add('four', '-=5.4')
        .to('.loadinghero__heading', 0.4, { opacity: 0, delay: 0.4}, 'four')
        .to('.loadinghero', 0.4, {height: 0, ease: Power4.easeOut, delay: 0.8}, 'four');     
}

initLoadingHero();

setTimeout(function(){
  document.querySelectorAll('.loadinghero__video').forEach(vid => vid.pause());
}, 5000);