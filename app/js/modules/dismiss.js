'use strict';

import ElementCount from './elementCount';
import FadeOut from '../utils/fadeOut';

var Dismiss = function(bulletinElem, bulletinOuter) {
  function domRemoval() {
    bulletinOuter.removeChild(bulletinElem);

    var count = ElementCount.decrease();
    if (count === 0) {
      var body = document.getElementsByTagName('body')[0];
      body.removeChild(bulletinOuter);
    }
  }

  FadeOut(bulletinElem, domRemoval);

  var event = new Event('bulletin-dismissing');
  bulletinElem.dispatchEvent(event);
};

export default Dismiss;
