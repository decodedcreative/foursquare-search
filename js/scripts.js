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
			key: "getVenuesNear",
			value: function getVenuesNear(location) {
				var apiURL = "https://api.foursquare.com/v2/venues/explore?near=" + location + "&client_id=" + this.clientid + "&client_secret=" + this.secret + "&v=" + this.version + "&m=" + this.mode;

				return fetch(apiURL).then(function (response) {
					return response.json();
				}).then(function (data) {

					console.log(data);

					var venues = data.response.groups[0].items;
					var venueAddress = "";

					var venuesArray = venues.map(function (venueObj) {

						if (venueObj.venue.location.address.length > 0) {
							venueAddress = venueObj.venue.location.address;
						}

						return {
							name: venueObj.venue.name,
							address: venueObj.venue.location.address
						};
					});

					return venuesArray;
				}).catch(function (error) {
					return "error";
				});
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

var locationSearchForm = document.querySelector("#venuesByLocation");
var locationSearchBox = locationSearchForm.querySelector("#location");
var searchResults = document.querySelector(".search-results");

locationSearchForm.addEventListener("submit", function (e) {
	e.preventDefault();

	fourSquareInstance.getVenuesNear(locationSearchBox.value).then(function (venuesArray) {
		console.log(venuesArray);
	});
});

},{"./modules/foursquare.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9mb3Vyc3F1YXJlLmpzIiwic3JjL2pzL3ZlbnVlLXNlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQWUsVUFBQSxBQUFDLFFBQUQ7b0JBRWQ7d0JBQWE7eUJBQ1o7O1FBQUEsQUFBSyxXQUFXLE9BQWhCLEFBQXVCLEFBQ3ZCO1FBQUEsQUFBSyxTQUFTLE9BQWQsQUFBcUIsQUFDckI7UUFBQSxBQUFLLFVBQVUsT0FBZixBQUFzQixBQUN0QjtRQUFBLEFBQUssT0FBTyxPQUFaLEFBQW1CLEFBQ25CO0FBUGE7OztRQUFBO2lDQUFBLEFBU0MsVUFBVSxBQUN4QjtRQUFNLGdFQUFBLEFBQThELDJCQUFzQixLQUFwRixBQUF5RiwrQkFBMEIsS0FBbkgsQUFBd0gsaUJBQVksS0FBcEksQUFBeUksa0JBQWEsS0FBNUosQUFBaUssQUFHaks7O2lCQUFPLEFBQU0sUUFBTixBQUNMLEtBQUssVUFBQSxBQUFDLFVBQUQ7WUFBYyxTQUFkLEFBQWMsQUFBUztBQUR2QixLQUFBLEVBQUEsQUFFSixLQUFLLFVBQUEsQUFBUyxNQUFNLEFBRXBCOzthQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O1NBQU0sU0FBUyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsR0FBcEMsQUFBdUMsQUFDdkM7U0FBSSxlQUFKLEFBQW1CLEFBRW5COztTQUFNLHFCQUFjLEFBQU8sSUFBSSxVQUFBLEFBQUMsVUFBWSxBQUUzQzs7VUFBSSxTQUFBLEFBQVMsTUFBVCxBQUFlLFNBQWYsQUFBd0IsUUFBeEIsQUFBZ0MsU0FBcEMsQUFBNkMsR0FBRyxBQUMvQztzQkFBZSxTQUFBLEFBQVMsTUFBVCxBQUFlLFNBQTlCLEFBQXVDLEFBQ3ZDO0FBRUY7OzthQUNPLFNBQUEsQUFBUyxNQURULEFBQ2UsQUFDckI7Z0JBQVMsU0FBQSxBQUFTLE1BQVQsQUFBZSxTQUZ6QixBQUFPLEFBRTJCLEFBRWxDO0FBSk8sQUFDTjtBQVBELEFBQW9CLEFBWXJCLE1BWnFCOztZQVlyQixBQUFPLEFBR1A7QUF4QkssT0FBQSxBQXlCTixNQUFNLFVBQUEsQUFBUyxPQUFPLEFBQ3RCO1lBQUEsQUFBTyxBQUNQO0FBM0JELEFBQU8sQUE4QlA7QUEzQ2E7QUFBQTs7U0FBQTtBQUFBO0E7Ozs7O0FDQ2Q7Ozs7Ozs7O0FBR0EsSUFBTTtZQUFTLEFBQ0gsQUFDWDtnQkFGYyxBQUVDLEFBQ2Y7VUFIYyxBQUdMLEFBQ1Q7T0FKRCxBQUFlLEFBSVI7QUFKUSxBQUNkOztBQU1ELElBQU0sYUFBYSwwQkFBbkIsQUFBbUIsQUFBYztBQUNqQyxJQUFNLHFCQUFxQixJQUEzQixBQUEyQixBQUFJOztBQUUvQixJQUFNLHFCQUFxQixTQUFBLEFBQVMsY0FBcEMsQUFBMkIsQUFBdUI7QUFDbEQsSUFBTSxvQkFBb0IsbUJBQUEsQUFBbUIsY0FBN0MsQUFBMEIsQUFBaUM7QUFDM0QsSUFBTSxnQkFBZ0IsU0FBQSxBQUFTLGNBQS9CLEFBQXNCLEFBQXVCOztBQUU3QyxtQkFBQSxBQUFtQixpQkFBbkIsQUFBb0MsVUFBVSxVQUFBLEFBQVUsR0FBRSxBQUN6RDtHQUFBLEFBQUUsQUFFRjs7b0JBQUEsQUFBbUIsY0FBYyxrQkFBakMsQUFBbUQsT0FBbkQsQUFBMEQsS0FBSyx1QkFBZSxBQUM3RTtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFGRCxBQUlBO0FBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgKGNvbmZpZykgPT4gY2xhc3MgZm91clNxdWFyZSB7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLmNsaWVudGlkID0gY29uZmlnLmNsaWVudF9pZDtcblx0XHR0aGlzLnNlY3JldCA9IGNvbmZpZy5jbGllbnRfc2VjcmV0O1xuXHRcdHRoaXMudmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uO1xuXHRcdHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlO1xuXHR9XG5cblx0Z2V0VmVudWVzTmVhciAobG9jYXRpb24pIHtcblx0XHRjb25zdCBhcGlVUkwgPSBgaHR0cHM6Ly9hcGkuZm91cnNxdWFyZS5jb20vdjIvdmVudWVzL2V4cGxvcmU/bmVhcj0ke2xvY2F0aW9ufSZjbGllbnRfaWQ9JHt0aGlzLmNsaWVudGlkfSZjbGllbnRfc2VjcmV0PSR7dGhpcy5zZWNyZXR9JnY9JHt0aGlzLnZlcnNpb259Jm09JHt0aGlzLm1vZGV9YDtcblxuXG5cdFx0cmV0dXJuIGZldGNoKGFwaVVSTClcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRcdFx0XHRcdGNvbnN0IHZlbnVlcyA9IGRhdGEucmVzcG9uc2UuZ3JvdXBzWzBdLml0ZW1zO1xuXHRcdFx0XHRcdGxldCB2ZW51ZUFkZHJlc3MgPSBcIlwiO1xuXG5cdFx0XHRcdFx0Y29uc3QgdmVudWVzQXJyYXkgPSB2ZW51ZXMubWFwKCh2ZW51ZU9iaikgPT57XG5cblx0XHRcdFx0XHRcdGlmICh2ZW51ZU9iai52ZW51ZS5sb2NhdGlvbi5hZGRyZXNzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0dmVudWVBZGRyZXNzID0gdmVudWVPYmoudmVudWUubG9jYXRpb24uYWRkcmVzcztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRuYW1lOiB2ZW51ZU9iai52ZW51ZS5uYW1lLFxuXHRcdFx0XHRcdFx0YWRkcmVzczogdmVudWVPYmoudmVudWUubG9jYXRpb24uYWRkcmVzc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHZlbnVlc0FycmF5O1xuXG5cblx0XHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gXCJlcnJvclwiO1xuXHRcdH0pO1xuXG5cblx0fVxufSIsIlx0XG5cdGltcG9ydCBmb3Vyc3F1YXJlQVBJIGZyb20gJy4vbW9kdWxlcy9mb3Vyc3F1YXJlLmpzJztcblxuXG5cdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRjbGllbnRfaWQ6IFwiTDMwUlEwQjNKTUxJWEpXTFFUSlVHTURJRERLM0pPT0NaUUQ0VkNET1dMUVhLMUdYXCIsXG5cdFx0Y2xpZW50X3NlY3JldDogXCJNUVQ0VUdFNEtNM1dLS1ZKMkRIRjFDRE9LU1ExT1ExQUIzNTJRVElYT0I0MldRWTVcIixcblx0XHR2ZXJzaW9uOiBcIjIwMTIwNjA5XCIsXG5cdFx0bW9kZTogXCJmb3Vyc3F1YXJlXCJcblx0fTtcblxuXHRjb25zdCBmb3VyU3F1YXJlID0gZm91cnNxdWFyZUFQSShjb25maWcpO1xuXHRjb25zdCBmb3VyU3F1YXJlSW5zdGFuY2UgPSBuZXcgZm91clNxdWFyZSgpO1xuXG5cdGNvbnN0IGxvY2F0aW9uU2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmVudWVzQnlMb2NhdGlvblwiKTtcblx0Y29uc3QgbG9jYXRpb25TZWFyY2hCb3ggPSBsb2NhdGlvblNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKTtcblx0Y29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXJlc3VsdHNcIik7XG5cblx0bG9jYXRpb25TZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGZvdXJTcXVhcmVJbnN0YW5jZS5nZXRWZW51ZXNOZWFyKGxvY2F0aW9uU2VhcmNoQm94LnZhbHVlKS50aGVuKHZlbnVlc0FycmF5ID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHZlbnVlc0FycmF5KTtcblx0XHR9KTtcblxuXHR9KTsiXX0=
