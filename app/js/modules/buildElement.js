'use strict';

var BuildElement = function(color, message, title) {
  var bulletinOuter = document.createElement('div');
  bulletinOuter.className = 'bulletin-container';

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

  bulletinOuter.appendChild(bulletinInner);

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(bulletinOuter);

  return bulletinOuter;
};

export default BuildElement;
