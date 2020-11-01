import Parallax from "parallax-js";

if ($("#scene").length > 0) {
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });
}