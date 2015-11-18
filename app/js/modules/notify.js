'use strict';

import BuildElement from './buildElement';
import Timer from '../utils/timer';

var Notify = function(color, message, title, options) {
  var bulletinElement = BuildElement(color, message, title);

  var duration = parseInt(options.duration);

  var waitToHide = new Timer(function() {
    var body = document.getElementsByTagName('body')[0];
    body.removeChild(bulletinElement);
  }, duration);
};

export default Notify;
