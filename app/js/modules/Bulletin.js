'use strict';

import Notify from './notify';
import Ask from './ask';
import ElementCount from './elementCount';
import BULL from './constants';
import defaults from './defaults';
import extend from '../utils/extend';

var Bulletin = function(color, message, title, options) {
  this.settings = extend(defaults, options);
  this.message = message;
  this.title = title;
  this.color = color;

  var bulletinCount = ElementCount.get();
  if (!bulletinCount) {
    bulletinCount = 0;
  }

  if (bulletinCount === 0) {
    // build container
    this.bulletinOuter = document.createElement('div');
    this.bulletinOuter.className = BULL.BANNER_CONTAINER;

    if (this.settings.type === BULL.BANNER) {
      this.bulletinOuter.className += ' bulletin-banner';
    }

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.bulletinOuter);
  } else {
    this.bulletinOuter = document.querySelector('.' + BULL.BANNER_CONTAINER);
  }

  return this;
};

Bulletin.prototype.ask = function() {
  return Ask(this.color, this.message, this.title, this.settings, this.bulletinOuter);
};

Bulletin.prototype.notify = function() {
  return Notify(this.color, this.message, this.title, this.settings, this.bulletinOuter);
};

export default Bulletin;
