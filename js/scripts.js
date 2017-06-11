(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

exports.default = function (config) {
	return function () {
		function fourSquare() {
			_classCallCheck(this, fourSquare);

			this.clientid = config.client_id;
			this.secret = config.client_secret;
			this.version = config.version;
			this.mode = config.mode;
		}

		_createClass(fourSquare, [{
			key: "getValuesNear",
			value: function getValuesNear() {

				console.log(this.clientid);
			}
		}]);

		return fourSquare;
	}();
};

},{}],2:[function(require,module,exports){
"use strict";

var _foursquare = require("./modules/foursquare.js");

var _foursquare2 = _interopRequireDefault(_foursquare);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var config = {
	client_id: "L30RQ0B3JMLIXJWLQTJUGMDIDDK3JOOCZQD4VCDOWLQXK1GX",
	client_secret: "MQT4UGE4KM3WKKVJ2DHF1CDOKSQ1OQ1AB352QTIXOB42WQY5",
	version: "20120609",
	mode: "foursquare"
};

var fourSquare = (0, _foursquare2.default)(config);
var fourSquareInstance = new fourSquare();

console.log(fourSquareInstance);

},{"./modules/foursquare.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9mb3Vyc3F1YXJlLmpzIiwic3JjL2pzL3ZlbnVlLXNlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQWUsVUFBQSxBQUFDLFFBQUQ7b0JBRWQ7d0JBQWE7eUJBQ1o7O1FBQUEsQUFBSyxXQUFXLE9BQWhCLEFBQXVCLEFBQ3ZCO1FBQUEsQUFBSyxTQUFTLE9BQWQsQUFBcUIsQUFDckI7UUFBQSxBQUFLLFVBQVUsT0FBZixBQUFzQixBQUN0QjtRQUFBLEFBQUssT0FBTyxPQUFaLEFBQW1CLEFBQ25CO0FBUGE7OztRQUFBO21DQVNHLEFBRWhCOztZQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBRWpCO0FBYmE7QUFBQTs7U0FBQTtBQUFBO0E7Ozs7O0FDQ2Q7Ozs7Ozs7O0FBR0EsSUFBTTtZQUFTLEFBQ0gsQUFDWDtnQkFGYyxBQUVDLEFBQ2Y7VUFIYyxBQUdMLEFBQ1Q7T0FKRCxBQUFlLEFBSVI7QUFKUSxBQUNkOztBQU1ELElBQU0sYUFBYSwwQkFBbkIsQUFBbUIsQUFBYztBQUNqQyxJQUFNLHFCQUFxQixJQUEzQixBQUEyQixBQUFJOztBQUcvQixRQUFBLEFBQVEsSUFBUixBQUFZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IChjb25maWcpID0+IGNsYXNzIGZvdXJTcXVhcmUge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5jbGllbnRpZCA9IGNvbmZpZy5jbGllbnRfaWQ7XG5cdFx0dGhpcy5zZWNyZXQgPSBjb25maWcuY2xpZW50X3NlY3JldDtcblx0XHR0aGlzLnZlcnNpb24gPSBjb25maWcudmVyc2lvbjtcblx0XHR0aGlzLm1vZGUgPSBjb25maWcubW9kZTtcblx0fVxuXG5cdGdldFZhbHVlc05lYXIgKCkge1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy5jbGllbnRpZCk7XG5cblx0fVxufSIsIlx0XG5cdGltcG9ydCBmb3Vyc3F1YXJlQVBJIGZyb20gJy4vbW9kdWxlcy9mb3Vyc3F1YXJlLmpzJztcblxuXG5cdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRjbGllbnRfaWQ6IFwiTDMwUlEwQjNKTUxJWEpXTFFUSlVHTURJRERLM0pPT0NaUUQ0VkNET1dMUVhLMUdYXCIsXG5cdFx0Y2xpZW50X3NlY3JldDogXCJNUVQ0VUdFNEtNM1dLS1ZKMkRIRjFDRE9LU1ExT1ExQUIzNTJRVElYT0I0MldRWTVcIixcblx0XHR2ZXJzaW9uOiBcIjIwMTIwNjA5XCIsXG5cdFx0bW9kZTogXCJmb3Vyc3F1YXJlXCJcblx0fTtcblxuXHRjb25zdCBmb3VyU3F1YXJlID0gZm91cnNxdWFyZUFQSShjb25maWcpO1xuXHRjb25zdCBmb3VyU3F1YXJlSW5zdGFuY2UgPSBuZXcgZm91clNxdWFyZSgpO1xuXG5cblx0Y29uc29sZS5sb2coZm91clNxdWFyZUluc3RhbmNlKTsiXX0=
