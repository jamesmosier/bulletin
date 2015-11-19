'use strict';

import ElementCount from './elementCount';
import FadeOut from '../utils/fadeOut';

var Dismiss = function(elem, bulletinOuter) {
  function domRemoval() {
    bulletinOuter.removeChild(elem);

    var count = ElementCount.decrease();
    if (count === 0) {
      var body = document.getElementsByTagName('body')[0];
      body.removeChild(bulletinOuter);
    }
  }

  FadeOut(elem, domRemoval);
};

export default Dismiss;
