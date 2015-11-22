'use strict';

var FindChild = function(parentElem, theClass) {
  var theChild = null;
  for (var i = 0; i < parentElem.childNodes.length; i++) {
    if (parentElem.childNodes[i].className === theClass) {
      theChild = parentElem.childNodes[i];
      break;
    }
  }

  if (!theChild) {
    throw new Error('Could not locate child with class: ' + theClass);
  }

  return theChild;
};

export default FindChild;
