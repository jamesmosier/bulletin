'use strict';

import BuildElement from './buildElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';
import ElementCount from './elementCount';

var Notify = function(color, message, title, options, bulletinOuter) {
  ElementCount.increase();

  var showingEvent = new Event('bulletin-showing');
  var bulletinElement = BuildElement(color, message, title);
  bulletinOuter.appendChild(bulletinElement);

  var duration = parseInt(options.duration);
  if (duration === 'NaN') {
    duration = 2000;
  }

  var waitToHide = new Timer(function() {
    return Dismiss(bulletinElement, bulletinOuter);
  }, duration);

  bulletinElement.addEventListener('mouseover', function() {
    waitToHide.pause();
  }.bind(this), true);

  bulletinElement.addEventListener('mouseout', function() {
    waitToHide.resume();
  }.bind(this), true);

  bulletinElement.addEventListener('click', function() {
    waitToHide.clear();
    return Dismiss(bulletinElement, bulletinOuter);
  }.bind(this), true);

  bulletinElement.addEventListener('bulletin-dismissing', function() {
    alert('dismissing');
  }, false);

  bulletinElement.addEventListener('bulletin-showing', function() {
    if (typeof options.onShown === 'function') {
      // TODO: what should 'this' be for onShown()?
      options.onShown();
      // options.onShown.call(this);
    }
  }, true);

  bulletinElement.dispatchEvent(showingEvent);
};

export default Notify;
