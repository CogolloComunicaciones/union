import Header from "./header";
import Parallax from "./parallax";
import gsap from "./gsap";
import pieChart from "./pieChart";

$(function () {
  class App {
    constructor() {
      Header.init();
    }
  }
  new App();
});
