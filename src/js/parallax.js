import Parallax from "parallax-js";

export const isMobile = function () {
  return $(window).width() < 1024 ? true : false;
};

if ($("#scene").length > 0) {
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });
}

if (isMobile()) {
  parallaxInstance.destroy();
}