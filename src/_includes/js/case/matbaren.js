import gsap from 'gsap';
import CubicBezier from './../gsap-cubicbezier.js';

// TODO: Make sure so mouseout/touchend doesn't trigger before start_case2 has animated
// Note the dubble trigger from the event lisseners
// or even better - convert to a gsap timeline and change play direction depending on enter or leave

// Init all code on document eady
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function(){

    //////////////////
    // CASE 2
    
    // Config
    var easeBounce = CubicBezier.config(0.2, 2, .3, .8);
    var t = 1.6;

    // Reset
    var reset_case2 = function(){
        gsap.set("#mbkz_bg", { rotationX:20, rotationZ:15, x:0, y:0, z:0 });
        gsap.set("#mbkz_menu", { rotationX:20, rotationZ:15, x:-3, y:-10, z:40 }); 
        gsap.set("#mbkz_side", { rotationX:20, rotationZ:15, x:-3, y:-20, z:60 });
        gsap.set("#mbkz_content", { rotationX:20, rotationZ:15, x:-10, y:-2, z:15 });
        gsap.set(".mbkz_textrow", { x:-5, y:-5 });
    }
    reset_case2();

    var start_case2 = function(){
        if (hover_case2) return;
        hover_case2 = true;
        // console.log('start');
        gsap.to("#mbkz_bg", t, { rotationX:0, rotationZ:0, x:0, y:0, z:0, ease: easeBounce });
        gsap.to("#mbkz_menu", t, { rotationX:0, rotationZ:0, x:0, y:0, z:0, ease: easeBounce }); 
        gsap.to("#mbkz_side", t, { rotationX:0, rotationZ:0, x:0, y:0, z:0, ease: easeBounce });
        gsap.to("#mbkz_content", t, { rotationX:0, rotationZ:0, x:0, y:0, z:0, ease: easeBounce });

        gsap.staggerTo(".mbkz_textrow", 0.5, {x:0, y:0, ease:Back.easeOut, onComplete: function(){hover_case2 = false} }, 0.05);
    }

    var end_case2 = function() {
        if (hover_case2) return;
        // console.log('end');
        gsap.to("#mbkz_bg", t, { rotationX:20, rotationZ:15, x:0, y:0, z:0, ease: easeBounce });
        gsap.to("#mbkz_menu", t, { rotationX:20, rotationZ:15, x:-3, y:-10, z:40, ease: easeBounce }); 
        gsap.to("#mbkz_side", t, { rotationX:20, rotationZ:15, x:-3, y:-20, z:60, ease: easeBounce });
        gsap.to("#mbkz_content", t, { rotationX:20, rotationZ:15, x:-10, y:-2, z:15, ease: easeBounce });

        gsap.staggerTo(".mbkz_textrow", 0.5, {x:-5, y:-5, ease:Back.easeOut}, 0.05);
    }

    // Events
    var hover_case2 = false; // prevent from start multiple hover animations

    var animTrigger = document.getElementById('case_matbaren');

    if (animTrigger) {
        animTrigger.addEventListener("touchstart", start_case2, true);
        animTrigger.addEventListener("mouseenter", start_case2, true);
        animTrigger.addEventListener("touchend", end_case2, true);
        animTrigger.addEventListener("mouseleave", end_case2, true);
    }

});