'use strict';

var Notify = function(color, message, title, options) {
    var bulletinOuter = document.createElement('div');
    // bulletinOuter.style.position = 'absolute';
    // bulletinOuter.style.top = 0;
    // bulletinOuter.style.right = 0;
    // bulletinOuter.style.minWidth = '100px';
    // bulletinOuter.style.minHeight = '100px';
    bulletinOuter.className = 'bulletin-container';

    var bulletinInner = document.createElement('div');
    bulletinInner.className = 'bulletin-inner';

    var titleElem = document.createElement('div');
    var messageElem = document.createElement('div');

    var titleText = document.createTextNode(title);
    var messageText = document.createTextNode(message);

    titleElem.appendChild(titleText);
    messageElem.appendChild(messageText);

    bulletinInner.appendChild(titleElem);
    bulletinInner.appendChild(messageElem);

    bulletinOuter.appendChild(bulletinInner);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(bulletinOuter);
};

export default Notify;
