'use strict';

import Notify from './notify';
import Prompt from './prompt';
import _ from 'lodash';

var defaults = {
  duration: 1500,
  someProp: 'james'
};

//http://stackoverflow.com/questions/8624590/accessing-instance-variable-from-parent-function
//google: javascript get parameters from parent function
//just make this a prototype and call function from something like Bulletin.prototype.prompt, retrieving this.settings from constructor

var Bulletin = function(options) {
  var trap = 123;

  var settings = _.extend(defaults, options);

  var bulletinApi = {
    notify: Notify,
    prompt: Prompt
  };

  return bulletinApi;
};

export default Bulletin;

