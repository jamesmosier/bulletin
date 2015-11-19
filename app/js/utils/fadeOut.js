'use strict';

var FadeOut = function(el, cb) {

  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
      cb();
    } else {
      requestAnimationFrame(fade);
    }
  })(cb);

};

export default FadeOut;
