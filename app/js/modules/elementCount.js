'use strict';

var ElementCount = (function() {

  var count = 0;

  function getElementCount() {
    return count;
  }

  function decreaseElementCount() {
    if (!count) {
      count = 0;
      return count;
    }

    count = count - 1;
    return count;
  }

  function increaseElementCount() {
    if (!count) {
      count = 0;
    }

    count = count + 1;
    return count;
  }

  return {
    get: getElementCount,
    increase: increaseElementCount,
    decrease: decreaseElementCount
  };
})();

export default ElementCount;
