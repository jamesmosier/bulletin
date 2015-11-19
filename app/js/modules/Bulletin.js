'use strict';

import Notify from './notify';
import Ask from './ask';

var bulletinCount = 0;

var defaults = {
  duration: 1500,
  someProp: 'james'
};

var Bulletin = function(color, message, title, options) {
  this.settings = Object.assign(defaults, options);
  this.message = message;
  this.title = title;
  this.color = color;

  console.log('at start of bulletin init' + bulletinCount);

  if (bulletinCount === 0 || !bulletinCount) {
    // build container
    this.bulletinOuter = document.createElement('div');
    this.bulletinOuter.className = 'bulletin-container';

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.bulletinOuter);

    bulletinCount = 0;
  } else {
    console.log('bulletin count is not 0');
    this.bulletinOuter = document.querySelector('.bulletin-container');
  }

  bulletinCount++;
  console.log(bulletinCount);

  return this;
};

Bulletin.prototype.ask = function() {
  Ask(this.color, this.message, this.title, this.settings);
};

Bulletin.prototype.notify = function() {
  var ret = Notify(this.color, this.message, this.title, this.settings, bulletinCount, this.bulletinOuter);
  bulletinCount = ret;
};

export default Bulletin;
