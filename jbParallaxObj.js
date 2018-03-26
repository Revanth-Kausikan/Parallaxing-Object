/*
Plugin for parallaxing html objects/elements.

Prallaxing objects just float in your html page. It moves up/down in a speed different to the speed the user scrolls the page with.

This project is licensed under the terms of the GNU GPLv3 license.
A copy of the lisence will be found in the root directory of the project as "LICENSE.txt"
*/
var jbParallaxObj = {
  move: function() {
    document.querySelectorAll(".jbParallaxObj").forEach(function(a, b) {
      var y;
      if (document.documentElement.scrollTop) {
        y = a.getAttribute("jbInitY") - (document.documentElement.scrollTop * a.getAttribute("parallaxSpeed") / 100);
      } else {
        y = a.getAttribute("jbInitY") - (document.body.scrollTop * a.getAttribute("parallaxSpeed") / 100);
      }
      a.style.transform = a.style.msTransform = a.style.WebkitTransform = "translate(" + a.getAttribute("jbInitX") + "px, " + y + "px)";
    });
  },
  prepare: function() {
    document.querySelectorAll(".jbParallaxObj").forEach(function(a, b) {
      var c = a.style.transform,
        d = [0, 0];
      if (c) {
        for (i = c.indexOf("translate(") + 10; c[i] != ')'; i++);
        d = c.substring(c.indexOf("translate(") + 10, i - 2).split("px, ");
        console.log(d);
      }
      a.setAttribute("jbInitX", d[0]);
      a.setAttribute("jbInitY", d[1]);
    });
  }
}
window.onload = function() {
  jbParallaxObj.prepare();
  jbParallaxObj.move();
}
window.onscroll = function() {
  jbParallaxObj.move();
};
