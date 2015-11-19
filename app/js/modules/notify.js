'use strict';

import BuildElement from './buildElement';
import Timer from '../utils/timer';

var Notify = function(color, message, title, options) {
  var bulletinElement = BuildElement(color, message, title);

  var duration = parseInt(options.duration);
  var body = document.getElementsByTagName('body')[0];

  var waitToHide = new Timer(function() {
    body.removeChild(bulletinElement);
  }, duration);

  bulletinElement.addEventListener('mouseover', function () {
    console.log('mousing over');
    waitToHide.pause();
  }.bind(this), true);

  bulletinElement.addEventListener('mouseout', function () {
    console.log('mousing OUT');
    waitToHide.resume();
  }.bind(this), true);
};

export default Notify;
