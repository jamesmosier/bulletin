'use strict';

import ElementCount from './elementCount';

var Dismiss = function(elem, bulletinOuter) {
  bulletinOuter.removeChild(elem);

  var count = ElementCount.decrease();
  if (count === 0) {
    var body = document.getElementsByTagName('body')[0];
    body.removeChild(bulletinOuter);
  }
};

export default Dismiss;
