'use strict';

import BuildElement from './buildElement';
import BuildAskElement from './buildAskElement';
import Dismiss from './dismiss';
import Timer from '../utils/timer';
import ElementCount from './elementCount';
import FindChild from '../utils/findChild';
import BULL from './constants';

var Ask = function(color, message, title, options, bulletinOuter) {
  ElementCount.increase();

  var showingEvent = new Event(BULL.SHOWING);
  var bulletinElement = BuildElement(color, message, title);
  bulletinElement.className += ' bulletin-ask';

  var askElements = BuildAskElement();
  bulletinElement.appendChild(askElements);
  bulletinOuter.appendChild(bulletinElement);

  // Confirm (user presses confirm)
  if (typeof(options.onConfirm) === 'function') {
    var confirmBtn = FindChild(askElements, 'bulletin-confirm');
    confirmBtn.addEventListener('click', options.onConfirm);
  }

  // Deny (user presses deny)
  if (typeof(options.onDeny) === 'function') {
    var denyBtn = FindChild(askElements, 'bulletin-deny');
    denyBtn.addEventListener('click', options.onDeny);
  }

  // Shown (when it is completely visible)
  bulletinElement.addEventListener(BULL.SHOWING, function() {
    if (typeof(options.onShown) === 'function') {
      options.onShown();
    }
  });

  // Hide (when ask if complete hid)
  bulletinElement.addEventListener(BULL.DISMISSING, function() {
    if (typeof options.onDismiss === 'function') {
      options.onDismiss();
    }
  });

  bulletinElement.dispatchEvent(showingEvent);
};

// onConfirm: null,
//  onDeny: null,
//  onClose: null,
//  onShown: null,
//  onHiding: null

export default Ask;
