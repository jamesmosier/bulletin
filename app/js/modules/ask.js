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

  // Confirm (user presses confirm)
  if (typeof(options.onConfirm) === 'function') {
    var confirmBtn = FindChild(askElements, 'bulletin-confirm');
    confirmBtn.addEventListener('click', options.onConfirm, true);
  }

  // Deny (user presses deny)
  if (typeof(options.onDeny) === 'function') {
    var denyBtn = FindChild(askElements, 'bulletin-deny');
    denyBtn.addEventListener('click', options.onDeny, true);
  }

  // Shown (when it is completely visible)
  if (typeof(options.onShown) === 'function') {
    // var denyBtn = FindChild(askElements, 'bulletin-deny');
    // denyBtn.addEventListener('click', options.onShown, true);
  }

  // Hide (when ask if complete hid)
  if (typeof(options.onDeny) === 'function') {
    var denyBtn = FindChild(askElements, 'bulletin-deny');
    denyBtn.addEventListener('click', options.onDeny, true);
  }

  // Hiding (as soon as it starts hiding)
  if (typeof(options.onDeny) === 'function') {
    var denyBtn = FindChild(askElements, 'bulletin-deny');
    denyBtn.addEventListener('click', options.onDeny, true);
  }
};

// onConfirm: null,
//  onDeny: null,
//  onClose: null,
//  onShown: null,
//  onHiding: null

export default Ask;
