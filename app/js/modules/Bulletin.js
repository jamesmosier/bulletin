'use strict';

import Notify from './notify';
import Ask from './ask';

var defaults = {
  duration: 1500,
  someProp: 'james'
};

var Bulletin = function(color, message, title, options) {
  this.settings = Object.assign(defaults, options);
  this.message = message;
  this.title = title;
  this.color = color;

  return this;
};

Bulletin.prototype.ask = function() {
  Ask(this.color, this.message, this.title, this.settings);
};

Bulletin.prototype.notify = function() {
  Notify(this.color, this.message, this.title, this.settings);
};

export default Bulletin;
