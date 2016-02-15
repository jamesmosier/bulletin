'use strict';

import ElementCount from './elementCount';
import FadeOut from '../utils/fadeOut';
import BULL from './constants';

var Dismiss = function(bulletinElem, bulletinOuter) {
  var dismissingEvent = new Event(BULL.DISMISSING);

  function domRemoval() {
    bulletinOuter.removeChild(bulletinElem);

    var count = ElementCount.decrease();
    if (count === 0) {
      var body = document.getElementsByTagName('body')[0];
      body.removeChild(bulletinOuter);
    }
  }

  FadeOut(bulletinElem, domRemoval);

  bulletinElem.dispatchEvent(dismissingEvent);
};

export default Dismiss;
