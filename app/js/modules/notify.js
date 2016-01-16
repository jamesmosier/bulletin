'use strict';

import BuildElement from './buildElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';
import ElementCount from './elementCount';

var Notify = function(color, message, title, options, bulletinOuter) {
  ElementCount.increase();

  var bulletinElement = BuildElement(color, message, title);
  bulletinOuter.appendChild(bulletinElement);

  // TODO: not working :(
  var showingEvent = new Event('bulletin-showing');
  bulletinElement.dispatchEvent(showingEvent);

  var duration = parseInt(options.duration);
  // TODO: need to determine if NaN or some other oddity when parsing (such as passing objs)

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
    alert('showing');
  }, true);

  bulletinElement.addEventListener('bulletin-showing', function() {
    alert('showing with false');
  }, false);
};

export default Notify;
