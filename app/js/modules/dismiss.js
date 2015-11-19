'use strict';

var Dismiss = function (elem, bulletinCount, bulletinOuter) {
    console.log('start:' + bulletinCount);
    bulletinCount = bulletinCount - 1;
    console.log('end:' + bulletinCount);
    bulletinOuter.removeChild(elem);
};

export default Dismiss;