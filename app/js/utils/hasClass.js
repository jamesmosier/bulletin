'use strict';

var HasClass = function (elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
};

module.exports = HasClass;
