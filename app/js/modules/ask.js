'use strict';

import BuildElement from './buildElement';
import BuildAskElement from './buildAskElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';
import ElementCount from './elementCount';
import FindChild from '../utils/findChild';

var Ask = function(color, message, title, options, bulletinOuter) {
  ElementCount.increase();

  var bulletinElement = BuildElement(color, message, title);
  bulletinElement.className += ' bulletin-ask';

  var askElements = BuildAskElement();
  bulletinElement.appendChild(askElements);
  bulletinOuter.appendChild(bulletinElement);

  // askElements.id = ElementCount.get();

  // var duration = parseInt(options.duration);

  if (typeof(options.onConfirm) == 'function') {
    var confirmBtn = FindChild(askElements, 'bulletin-confirm');
    // var confirmBtn = bulletinElement.querySelector('.bulletin-confirm');
    confirmBtn.addEventListener('click', function(e) {
      options.onConfirm();
    }.bind(this), true);
  }
};

export default Ask;
