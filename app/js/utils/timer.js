'use strict';

var Timer = function(callback, delay) {
  //http://stackoverflow.com/questions/3969475/javascript-pause-settimeout

  var timerId, start, remaining = delay;

  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function() {
    start = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};

export default Timer;
