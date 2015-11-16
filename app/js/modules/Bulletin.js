'use strict';

import Notify from './notify';
import Prompt from './prompt';
import extend from '../utils/extend';

var defaults = {
  duration: 1500,
  someProp: 'james'
};

// What i want to happen:
// call something like Bulletin(params).notify() which should pass all params to child func

var Bulletin = function(color, message, title, options) {
  this.settings = extend(defaults, options);
  this.color = color;

  return this;
};

Bulletin.prototype.getObjWithParam = function(val) {
    console.log("value in parent class "+val);
};

Bulletin.prototype.prompt = function() {
  debugger;
  // Prompt(color, message, title, this.settings);
};

Bulletin.prototype.notify = function() {

  var sett = this.settings;
  var trap = 123;
  return this;
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