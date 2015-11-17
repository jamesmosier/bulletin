'use strict';

import Notify from './notify';
import Prompt from './prompt';
import extend from '../utils/extend';

var defaults = {
  duration: 1500,
  someProp: 'james'
};

var Bulletin = function(color, message, title, options) {
  this.settings = extend(defaults, options);
  this.message = message;
  this.title = title;
  this.color = color;

  return this;
};

Bulletin.prototype.getObjWithParam = function(val) {
    console.log("value in parent class "+val);
};

Bulletin.prototype.prompt = function() {
  Prompt(this.color, this.message, this.title, this.settings);
};

Bulletin.prototype.notify = function() {
  Notify(this.color, this.message, this.title, this.settings);
};

export default Bulletin;




// var myPrototype = {
//   methodA: function methodA() {},
//   methodB: function methodB() {},
//   methodC: function methodC() {}
// };

// createFoo = function createFoo() {
//   return (Object.create(myPrototype));
// };