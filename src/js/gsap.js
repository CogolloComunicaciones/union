TweenMax.from(".header-logo", .5, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".menu", 1.5, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".title", 2, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".hero-services--small", 2.5, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});

function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("animation-title")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("animation-item")) {
    x = 0;
    y = 100;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 3, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".animation").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
