'use strict';

var BuildAskElement = function() {
  var askContainer = document.createElement('div');
  askContainer.className = 'bulletin-ask-container';

  var confirm = document.createElement('div');
  confirm.className = 'bulletin-confirm';

  var deny = document.createElement('div');
  deny.className = 'bulletin-deny';

  // TODO: parameterize these values
  var confirmText = document.createTextNode('confirm');
  var denyText = document.createTextNode('deny');

  confirm.appendChild(confirmText);
  deny.appendChild(denyText);

  askContainer.appendChild(confirm);
  askContainer.appendChild(deny);

  return askContainer;
};

export default BuildAskElement;
