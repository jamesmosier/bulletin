'use strict';

var StyleBuilder = function() {
  var css = '';

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
};

export default StyleBuilder;
