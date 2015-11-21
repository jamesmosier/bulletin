'use strict';

import BuildElement from './buildElement';
import BuildAskElement from './buildAskElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';
import ElementCount from './elementCount';

var Ask = function(color, message, title, options, bulletinOuter) {
  ElementCount.increase();

  var bulletinElement = BuildElement(color, message, title);
  var askElements = BuildAskElement();
  bulletinElement.appendChild(askElements);
  bulletinOuter.appendChild(bulletinElement);

  var duration = parseInt(options.duration);
};

export default Ask;
