'use strict';

var BuildElement = function(color, message, title) {

  var bulletinInner = document.createElement('div');
  bulletinInner.className = 'bulletin-inner';

  var titleElem = document.createElement('div');
  titleElem.className = 'bulletin-title';

  var messageElem = document.createElement('div');
  messageElem.className = 'bulletin-message';

  var titleText = document.createTextNode(title);
  var messageText = document.createTextNode(message);

  titleElem.appendChild(titleText);
  messageElem.appendChild(messageText);

  bulletinInner.appendChild(titleElem);
  bulletinInner.appendChild(messageElem);

  return bulletinInner;
};

export default BuildElement;
