'use strict';

import BuildElement from './buildElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';
import ElementCount from './elementCount';

var Notify = function(color, message, title, options, bulletinOuter) {
  ElementCount.increase();

  var bulletinElement = BuildElement(color, message, title);
  bulletinOuter.appendChild(bulletinElement);

  var duration = parseInt(options.duration);

  var waitToHide = new Timer(function() {
    return Dismiss(bulletinElement, bulletinOuter);
  }, duration);

  bulletinElement.addEventListener('mouseover', function () {
    waitToHide.pause();
  }.bind(this), true);

  bulletinElement.addEventListener('mouseout', function () {
    waitToHide.resume();
  }.bind(this), true);

  bulletinElement.addEventListener('click', function () {
    waitToHide.clear();
    return Dismiss(bulletinElement, bulletinOuter);
  }.bind(this), true);

};

export default Notify;
