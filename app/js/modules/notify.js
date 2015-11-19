'use strict';

import BuildElement from './buildElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';

var Notify = function(color, message, title, options, bulletinCount, bulletinOuter) {
  var bulletinElement = BuildElement(color, message, title);
  bulletinOuter.appendChild(bulletinElement);

  var duration = parseInt(options.duration);

  var waitToHide = new Timer(function() {
    Dismiss(bulletinElement, bulletinCount, bulletinOuter);
    return bulletinCount;
  }, duration);

  bulletinElement.addEventListener('mouseover', function () {
    waitToHide.pause();
  }.bind(this), true);

  bulletinElement.addEventListener('mouseout', function () {
    waitToHide.resume();
  }.bind(this), true);

  bulletinElement.addEventListener('click', function () {
    Dismiss(bulletinElement, bulletinCount, bulletinOuter);
    waitToHide.clear();
    return bulletinCount;
  }.bind(this), true);
};

export default Notify;
