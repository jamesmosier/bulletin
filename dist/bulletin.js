/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Bulletin = __webpack_require__(2);
	
	var _Bulletin2 = _interopRequireDefault(_Bulletin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (global) {
	  'use strict';
	
	  global.Bulletin = _Bulletin2.default;
	})(window);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _notify = __webpack_require__(3);
	
	var _notify2 = _interopRequireDefault(_notify);
	
	var _ask = __webpack_require__(9);
	
	var _ask2 = _interopRequireDefault(_ask);
	
	var _elementCount = __webpack_require__(6);
	
	var _elementCount2 = _interopRequireDefault(_elementCount);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaults = {
	  duration: 2000,
	  onConfirm: null,
	  onDeny: null,
	  onClose: null,
	  onShown: null,
	  onHiding: null
	};
	
	var Bulletin = function Bulletin(color, message, title, options) {
	  this.settings = Object.assign(defaults, options);
	  this.message = message;
	  this.title = title;
	  this.color = color;
	
	  var bulletinCount = _elementCount2.default.get();
	  if (!bulletinCount) {
	    bulletinCount = 0;
	  }
	
	  if (bulletinCount === 0) {
	    // build container
	    this.bulletinOuter = document.createElement('div');
	    this.bulletinOuter.className = 'bulletin-container';
	
	    var body = document.getElementsByTagName('body')[0];
	    body.appendChild(this.bulletinOuter);
	  } else {
	    this.bulletinOuter = document.querySelector('.bulletin-container');
	  }
	
	  return this;
	};
	
	Bulletin.prototype.ask = function () {
	  (0, _ask2.default)(this.color, this.message, this.title, this.settings, this.bulletinOuter);
	};
	
	Bulletin.prototype.notify = function () {
	  (0, _notify2.default)(this.color, this.message, this.title, this.settings, this.bulletinOuter);
	};
	
	exports.default = Bulletin;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buildElement = __webpack_require__(4);
	
	var _buildElement2 = _interopRequireDefault(_buildElement);
	
	var _dismiss = __webpack_require__(5);
	
	var _dismiss2 = _interopRequireDefault(_dismiss);
	
	var _timer = __webpack_require__(8);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _elementCount = __webpack_require__(6);
	
	var _elementCount2 = _interopRequireDefault(_elementCount);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Notify = function Notify(color, message, title, options, bulletinOuter) {
	  _elementCount2.default.increase();
	
	  var bulletinElement = (0, _buildElement2.default)(color, message, title);
	  bulletinOuter.appendChild(bulletinElement);
	
	  var duration = parseInt(options.duration);
	
	  var waitToHide = new _timer2.default(function () {
	    return (0, _dismiss2.default)(bulletinElement, bulletinOuter);
	  }, duration);
	
	  bulletinElement.addEventListener('mouseover', (function () {
	    waitToHide.pause();
	  }).bind(this), true);
	
	  bulletinElement.addEventListener('mouseout', (function () {
	    waitToHide.resume();
	  }).bind(this), true);
	
	  bulletinElement.addEventListener('click', (function () {
	    waitToHide.clear();
	    return (0, _dismiss2.default)(bulletinElement, bulletinOuter);
	  }).bind(this), true);
	};
	
	exports.default = Notify;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BuildElement = function BuildElement(color, message, title) {
	
	  var bulletinInner = document.createElement('div');
	  bulletinInner.className = 'bulletin-inner';
	
	  var titleElem = document.createElement('div');
	  titleElem.className = 'bulletin-title';
	
	  var messageElem = document.createElement('div');
	  messageElem.className = 'bulletin-message';
	
	  var titleText = document.createTextNode(title);
	  var messageText = document.createTextNode(message);
	
	  titleElem.appendChild(titleText);
	  messageElem.appendChild(messageText);
	
	  bulletinInner.appendChild(titleElem);
	  bulletinInner.appendChild(messageElem);
	
	  return bulletinInner;
	};
	
	exports.default = BuildElement;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _elementCount = __webpack_require__(6);
	
	var _elementCount2 = _interopRequireDefault(_elementCount);
	
	var _fadeOut = __webpack_require__(7);
	
	var _fadeOut2 = _interopRequireDefault(_fadeOut);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Dismiss = function Dismiss(elem, bulletinOuter) {
	  function domRemoval() {
	    bulletinOuter.removeChild(elem);
	
	    var count = _elementCount2.default.decrease();
	    if (count === 0) {
	      var body = document.getElementsByTagName('body')[0];
	      body.removeChild(bulletinOuter);
	    }
	  }
	
	  (0, _fadeOut2.default)(elem, domRemoval);
	};
	
	exports.default = Dismiss;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ElementCount = (function () {
	
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
	
	exports.default = ElementCount;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FadeOut = function FadeOut(el, cb) {
	
	  el.style.opacity = 1;
	
	  (function fade() {
	    if ((el.style.opacity -= .1) < 0) {
	      el.style.display = "none";
	      cb();
	    } else {
	      requestAnimationFrame(fade);
	    }
	  })(cb);
	};
	
	exports.default = FadeOut;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Timer = function Timer(callback, delay) {
	  //http://stackoverflow.com/questions/3969475/javascript-pause-settimeout
	
	  var timerId,
	      start,
	      remaining = delay;
	
	  this.pause = function () {
	    window.clearTimeout(timerId);
	    remaining -= new Date() - start;
	  };
	
	  this.resume = function () {
	    start = new Date();
	    window.clearTimeout(timerId);
	    timerId = window.setTimeout(callback, remaining);
	  };
	
	  this.clear = function () {
	    window.clearTimeout(timerId);
	  };
	
	  this.resume();
	};
	
	exports.default = Timer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buildElement = __webpack_require__(4);
	
	var _buildElement2 = _interopRequireDefault(_buildElement);
	
	var _buildAskElement = __webpack_require__(10);
	
	var _buildAskElement2 = _interopRequireDefault(_buildAskElement);
	
	var _dismiss = __webpack_require__(5);
	
	var _dismiss2 = _interopRequireDefault(_dismiss);
	
	var _timer = __webpack_require__(8);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _elementCount = __webpack_require__(6);
	
	var _elementCount2 = _interopRequireDefault(_elementCount);
	
	var _findChild = __webpack_require__(11);
	
	var _findChild2 = _interopRequireDefault(_findChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Ask = function Ask(color, message, title, options, bulletinOuter) {
	  _elementCount2.default.increase();
	
	  var bulletinElement = (0, _buildElement2.default)(color, message, title);
	  bulletinElement.className += ' bulletin-ask';
	
	  var askElements = (0, _buildAskElement2.default)();
	  bulletinElement.appendChild(askElements);
	  bulletinOuter.appendChild(bulletinElement);
	
	  // askElements.id = ElementCount.get();
	
	  // var duration = parseInt(options.duration);
	
	  if (typeof options.onConfirm == 'function') {
	    var confirmBtn = (0, _findChild2.default)(askElements, 'bulletin-confirm');
	    // var confirmBtn = bulletinElement.querySelector('.bulletin-confirm');
	    confirmBtn.addEventListener('click', (function (e) {
	      options.onConfirm();
	    }).bind(this), true);
	  }
	};
	
	exports.default = Ask;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BuildAskElement = function BuildAskElement() {
	  var askContainer = document.createElement('div');
	  askContainer.className = 'bulletin-ask-container';
	
	  var confirm = document.createElement('div');
	  confirm.className = 'bulletin-confirm';
	
	  var deny = document.createElement('div');
	  deny.className = 'bulletin-deny';
	
	  // TODO: parameterize these values
	  var confirmText = document.createTextNode('confirm');
	  var denyText = document.createTextNode('deny');
	
	  confirm.appendChild(confirmText);
	  deny.appendChild(denyText);
	
	  askContainer.appendChild(confirm);
	  askContainer.appendChild(deny);
	
	  return askContainer;
	};
	
	exports.default = BuildAskElement;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FindChild = function FindChild(parentElem, theClass) {
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
	
	exports.default = FindChild;

/***/ }
/******/ ]);
//# sourceMappingURL=bulletin.js.map