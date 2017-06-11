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
					var rating = 0;
					var venuesArray = venues.map(function (venueObj) {

						if (venueObj.venue.location.address.length > 0) {
							venueAddress = venueObj.venue.location.address;
						}

						if (venueObj.venue.rating > 0 && venueObj.venue.rating < 2) {
							rating = 1;
						}

						if (venueObj.venue.rating > 2 && venueObj.venue.rating < 4) {
							rating = 2;
						}

						if (venueObj.venue.rating > 4 && venueObj.venue.rating < 6) {
							rating = 3;
						}

						if (venueObj.venue.rating > 6 && venueObj.venue.rating < 8) {
							rating = 4;
						}

						if (venueObj.venue.rating > 8 && venueObj.venue.rating < 10) {
							rating = 5;
						}

						return {
							name: venueObj.venue.name,
							address: venueObj.venue.location.address,
							rating: rating
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
'use strict';

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

exports.default = function () {
	return function () {
		function resultsList() {
			_classCallCheck(this, resultsList);
		}

		_createClass(resultsList, [{
			key: 'createResultsList',
			value: function createResultsList(resultsArray, targetElement) {

				var listHTML = resultsArray.map(function (result, index) {

					var transitionDelay = 0.3 * index;

					return '\n\t\t\t\t<li class=\'result\' style=\'transition-delay:' + transitionDelay + 's;\'>\n\t\t\t\t\t<div class="inner">\n\t\t\t\t\t\t<hgroup>\n\t\t\t\t\t\t\t<h2>' + result.name + '</h2>\n\t\t\t\t\t\t\t<h3>' + result.address + '</h3>\n\t\t\t\t\t\t</hgroup>\n\t\t\t\t\t\t<div class="rating-' + result.rating + '">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>';
				}).join('');

				// If .search-results DIV has content in it (from previous search), empty it

				if (targetElement.children.length !== 0) {
					targetElement.innerHTML = '';
				}

				var resultsListElement = document.createElement('ul');
				var targetElementList = targetElement.appendChild(resultsListElement);

				targetElementList.innerHTML = listHTML;

				setTimeout(function () {
					document.body.classList.add("loaded-results");
				}, 500);
			}
		}]);

		return resultsList;
	}();
};

},{}],3:[function(require,module,exports){
'use strict';

var _foursquare = require('./modules/foursquare.js');

var _foursquare2 = _interopRequireDefault(_foursquare);

var _resultsList = require('./modules/results-list.js');

var _resultsList2 = _interopRequireDefault(_resultsList);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

// To access FourSquare's API without OAuth authentication the following
// parameters need to be passed in any GET requests.

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

document.addEventListener("DOMContentLoaded", function () {
	document.body.classList.add("loaded");
	locationSearchBox.focus();
});

locationSearchForm.addEventListener("submit", function (e) {
	e.preventDefault();

	var alphanumeric = /^[0-9a-zA-Z]+$/;

	// Check if user has entered alphanumeric string and whether the string is longer than 1 character

	if (locationSearchBox.value.match(alphanumeric) && locationSearchBox.value.length > 1) {

		// Return an array of venue data and then build HTML to display the results

		fourSquareInstance.getVenuesNear(locationSearchBox.value).then(function (venuesArray) {

			var resultsList = (0, _resultsList2.default)();
			var resultsListInstance = new resultsList();

			if (venuesArray !== "error" && venuesArray.length > 0) {

				resultsListInstance.createResultsList(venuesArray, searchResults);
			} else {

				// If venuesArray is empty display No Results message

				searchResults.innerHTML = '\t<h2>No Results Found</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>No venues have been found for your location. Please try again.</p>';
			}
		});
	} else {

		//If string is non-alphanumeric or less than 2 characters

		searchResults.innerHTML = '\t<h2>No Results Found</h2>\n\t\t\t\t\t\t\t\t\t\t<p>No venues have been found for your location. Please try again.</p>';
	}
});

},{"./modules/foursquare.js":1,"./modules/results-list.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9mb3Vyc3F1YXJlLmpzIiwic3JjL2pzL21vZHVsZXMvcmVzdWx0cy1saXN0LmpzIiwic3JjL2pzL3ZlbnVlLXNlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQWUsVUFBQSxBQUFDLFFBQUQ7b0JBRWQ7d0JBQWE7eUJBQ1o7O1FBQUEsQUFBSyxXQUFXLE9BQWhCLEFBQXVCLEFBQ3ZCO1FBQUEsQUFBSyxTQUFTLE9BQWQsQUFBcUIsQUFDckI7UUFBQSxBQUFLLFVBQVUsT0FBZixBQUFzQixBQUN0QjtRQUFBLEFBQUssT0FBTyxPQUFaLEFBQW1CLEFBQ25CO0FBUGE7OztRQUFBO2lDQUFBLEFBU0MsVUFBVSxBQUN4QjtRQUFNLGdFQUFBLEFBQThELDJCQUFzQixLQUFwRixBQUF5RiwrQkFBMEIsS0FBbkgsQUFBd0gsaUJBQVksS0FBcEksQUFBeUksa0JBQWEsS0FBNUosQUFBaUssQUFFaks7O2lCQUFPLEFBQU0sUUFBTixBQUNMLEtBQUssVUFBQSxBQUFDLFVBQUQ7WUFBYyxTQUFkLEFBQWMsQUFBUztBQUR2QixLQUFBLEVBQUEsQUFFSixLQUFLLFVBQUEsQUFBUyxNQUFNLEFBRXBCOzthQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O1NBQU0sU0FBUyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsR0FBcEMsQUFBdUMsQUFDdkM7U0FBSSxlQUFKLEFBQW1CLEFBQ25CO1NBQUksU0FBSixBQUFhLEFBQ2I7U0FBTSxxQkFBYyxBQUFPLElBQUksVUFBQSxBQUFDLFVBQVksQUFFM0M7O1VBQUksU0FBQSxBQUFTLE1BQVQsQUFBZSxTQUFmLEFBQXdCLFFBQXhCLEFBQWdDLFNBQXBDLEFBQTZDLEdBQUcsQUFDL0M7c0JBQWUsU0FBQSxBQUFTLE1BQVQsQUFBZSxTQUE5QixBQUF1QyxBQUN2QztB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VUFBZCxBQUF3QixJQUF4QixBQUE0QixBQUM1QjttQkFBQSxBQUFrQixBQUNsQjtBQUhEOztBQUtBLG1CQUFBLEFBQW1CLGlCQUFuQixBQUFvQyxVQUFVLFVBQUEsQUFBVSxHQUFFLEFBQ3pEO0dBQUEsQUFBRSxBQUVGOztLQUFNLGVBQU4sQUFBcUIsQUFHckI7O0FBRUE7O0tBQUksa0JBQUEsQUFBa0IsTUFBbEIsQUFBd0IsTUFBeEIsQUFBOEIsaUJBQWlCLGtCQUFBLEFBQWtCLE1BQWxCLEFBQXdCLFNBQTNFLEFBQW9GLEdBQUUsQUFHckY7O0FBRUE7O3FCQUFBLEFBQW1CLGNBQWMsa0JBQWpDLEFBQW1ELE9BQW5ELEFBQTBELEtBQUssdUJBQWUsQUFFN0U7O09BQU0sY0FBYyxrQkFBcEIsQUFDQTtPQUFNLHNCQUFzQixJQUE1QixBQUE0QixBQUFJLEFBR2hDOztPQUFJLGdCQUFBLEFBQWdCLFdBQVcsWUFBQSxBQUFZLFNBQTNDLEFBQW9ELEdBQUcsQUFFdEQ7O3dCQUFBLEFBQW9CLGtCQUFwQixBQUFzQyxhQUF0QyxBQUFtRCxBQUVuRDtBQUpELFVBSU0sQUFFTDs7QUFFQTs7a0JBQUEsQUFBYyxZQUVkO0FBRUQ7QUFsQkQsQUFvQkE7QUF6QkQsUUF5Qk0sQUFFTDs7QUFFQTs7Z0JBQUEsQUFBYyxZQUVkO0FBR0Q7QUExQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgKGNvbmZpZykgPT4gY2xhc3MgZm91clNxdWFyZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuY2xpZW50aWQgPSBjb25maWcuY2xpZW50X2lkO1xuXHRcdHRoaXMuc2VjcmV0ID0gY29uZmlnLmNsaWVudF9zZWNyZXQ7XG5cdFx0dGhpcy52ZXJzaW9uID0gY29uZmlnLnZlcnNpb247XG5cdFx0dGhpcy5tb2RlID0gY29uZmlnLm1vZGU7XG5cdH1cblxuXHRnZXRWZW51ZXNOZWFyIChsb2NhdGlvbikge1xuXHRcdGNvbnN0IGFwaVVSTCA9IGBodHRwczovL2FwaS5mb3Vyc3F1YXJlLmNvbS92Mi92ZW51ZXMvZXhwbG9yZT9uZWFyPSR7bG9jYXRpb259JmNsaWVudF9pZD0ke3RoaXMuY2xpZW50aWR9JmNsaWVudF9zZWNyZXQ9JHt0aGlzLnNlY3JldH0mdj0ke3RoaXMudmVyc2lvbn0mbT0ke3RoaXMubW9kZX1gO1xuXG5cdFx0cmV0dXJuIGZldGNoKGFwaVVSTClcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRcdFx0XHRcdGNvbnN0IHZlbnVlcyA9IGRhdGEucmVzcG9uc2UuZ3JvdXBzWzBdLml0ZW1zO1xuXHRcdFx0XHRcdGxldCB2ZW51ZUFkZHJlc3MgPSBcIlwiO1xuXHRcdFx0XHRcdGxldCByYXRpbmcgPSAwO1xuXHRcdFx0XHRcdGNvbnN0IHZlbnVlc0FycmF5ID0gdmVudWVzLm1hcCgodmVudWVPYmopID0+e1xuXG5cdFx0XHRcdFx0XHRpZiAodmVudWVPYmoudmVudWUubG9jYXRpb24uYWRkcmVzcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHZlbnVlQWRkcmVzcyA9IHZlbnVlT2JqLnZlbnVlLmxvY2F0aW9uLmFkZHJlc3M7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh2ZW51ZU9iai52ZW51ZS5yYXRpbmcgPiAwICYmIHZlbnVlT2JqLnZlbnVlLnJhdGluZyA8IDIpIHtcblx0XHRcdFx0XHRcdFx0cmF0aW5nID0gMTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHZlbnVlT2JqLnZlbnVlLnJhdGluZyA+IDIgJiYgdmVudWVPYmoudmVudWUucmF0aW5nIDwgNCkge1xuXHRcdFx0XHRcdFx0XHRyYXRpbmcgPSAyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodmVudWVPYmoudmVudWUucmF0aW5nID4gNCAmJiB2ZW51ZU9iai52ZW51ZS5yYXRpbmcgPCA2KSB7XG5cdFx0XHRcdFx0XHRcdHJhdGluZyA9IDM7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh2ZW51ZU9iai52ZW51ZS5yYXRpbmcgPiA2ICYmIHZlbnVlT2JqLnZlbnVlLnJhdGluZyA8IDgpIHtcblx0XHRcdFx0XHRcdFx0cmF0aW5nID0gNDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHZlbnVlT2JqLnZlbnVlLnJhdGluZyA+IDggJiYgdmVudWVPYmoudmVudWUucmF0aW5nIDwgMTApIHtcblx0XHRcdFx0XHRcdFx0cmF0aW5nID0gNTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRuYW1lOiB2ZW51ZU9iai52ZW51ZS5uYW1lLFxuXHRcdFx0XHRcdFx0YWRkcmVzczogdmVudWVPYmoudmVudWUubG9jYXRpb24uYWRkcmVzcyxcblx0XHRcdFx0XHRcdHJhdGluZzogcmF0aW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gdmVudWVzQXJyYXk7XG5cblxuXHRcdFx0fSlcblx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdHJldHVybiBcImVycm9yXCI7XG5cdFx0fSk7XG5cdH1cblxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IGNsYXNzIHJlc3VsdHNMaXN0IHtcblx0XG5cdGNvbnN0cnVjdG9yKCl7XG5cblx0fVxuXG5cdGNyZWF0ZVJlc3VsdHNMaXN0IChyZXN1bHRzQXJyYXksIHRhcmdldEVsZW1lbnQpIHtcblxuXHRcdGNvbnN0IGxpc3RIVE1MID0gcmVzdWx0c0FycmF5Lm1hcCgocmVzdWx0LCBpbmRleCkgPT4ge1xuXHRcdFx0XG5cdFx0XHRsZXQgdHJhbnNpdGlvbkRlbGF5ID0gMC4zICogaW5kZXg7XG5cblx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxsaSBjbGFzcz0ncmVzdWx0JyBzdHlsZT0ndHJhbnNpdGlvbi1kZWxheToke3RyYW5zaXRpb25EZWxheX1zOyc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlubmVyXCI+XG5cdFx0XHRcdFx0XHQ8aGdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8aDI+JHtyZXN1bHQubmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0XHQ8aDM+JHtyZXN1bHQuYWRkcmVzc308L2gzPlxuXHRcdFx0XHRcdFx0PC9oZ3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmF0aW5nLSR7cmVzdWx0LnJhdGluZ31cIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9saT5gO1xuXHRcdH0pLmpvaW4oJycpO1xuXG5cblx0XHQvLyBJZiAuc2VhcmNoLXJlc3VsdHMgRElWIGhhcyBjb250ZW50IGluIGl0IChmcm9tIHByZXZpb3VzIHNlYXJjaCksIGVtcHR5IGl0XG5cblx0XHRpZiAodGFyZ2V0RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggIT09IDApe1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHR9XG5cblxuXHRcdGNvbnN0IHJlc3VsdHNMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudExpc3QgPSB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHJlc3VsdHNMaXN0RWxlbWVudCk7XG5cblx0XHR0YXJnZXRFbGVtZW50TGlzdC5pbm5lckhUTUwgPSBsaXN0SFRNTDtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRlZC1yZXN1bHRzXCIpO1xuXHRcdH0sIDUwMClcblxuXHR9XG5cbn0iLCJcdGltcG9ydCBmb3Vyc3F1YXJlQVBJIGZyb20gJy4vbW9kdWxlcy9mb3Vyc3F1YXJlLmpzJztcblx0aW1wb3J0IHJlc3VsdHNMaXN0TW9kdWxlIGZyb20gJy4vbW9kdWxlcy9yZXN1bHRzLWxpc3QuanMnO1xuXG5cdC8vIFRvIGFjY2VzcyBGb3VyU3F1YXJlJ3MgQVBJIHdpdGhvdXQgT0F1dGggYXV0aGVudGljYXRpb24gdGhlIGZvbGxvd2luZ1xuXHQvLyBwYXJhbWV0ZXJzIG5lZWQgdG8gYmUgcGFzc2VkIGluIGFueSBHRVQgcmVxdWVzdHMuXG5cblx0Y29uc3QgY29uZmlnID0ge1xuXHRcdGNsaWVudF9pZDogXCJMMzBSUTBCM0pNTElYSldMUVRKVUdNRElEREszSk9PQ1pRRDRWQ0RPV0xRWEsxR1hcIixcblx0XHRjbGllbnRfc2VjcmV0OiBcIk1RVDRVR0U0S00zV0tLVkoyREhGMUNET0tTUTFPUTFBQjM1MlFUSVhPQjQyV1FZNVwiLFxuXHRcdHZlcnNpb246IFwiMjAxMjA2MDlcIixcblx0XHRtb2RlOiBcImZvdXJzcXVhcmVcIlxuXHR9O1xuXG5cblx0Y29uc3QgZm91clNxdWFyZSA9IGZvdXJzcXVhcmVBUEkoY29uZmlnKTtcblx0Y29uc3QgZm91clNxdWFyZUluc3RhbmNlID0gbmV3IGZvdXJTcXVhcmUoKTtcblxuXHRjb25zdCBsb2NhdGlvblNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZlbnVlc0J5TG9jYXRpb25cIik7XG5cdGNvbnN0IGxvY2F0aW9uU2VhcmNoQm94ID0gbG9jYXRpb25TZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25cIik7XG5cdGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1yZXN1bHRzXCIpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpe1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcblx0XHRsb2NhdGlvblNlYXJjaEJveC5mb2N1cygpO1xuXHR9KTtcblxuXHRsb2NhdGlvblNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgYWxwaGFudW1lcmljID0gL15bMC05YS16QS1aXSskLztcblxuXG5cdFx0Ly8gQ2hlY2sgaWYgdXNlciBoYXMgZW50ZXJlZCBhbHBoYW51bWVyaWMgc3RyaW5nIGFuZCB3aGV0aGVyIHRoZSBzdHJpbmcgaXMgbG9uZ2VyIHRoYW4gMSBjaGFyYWN0ZXJcblxuXHRcdGlmIChsb2NhdGlvblNlYXJjaEJveC52YWx1ZS5tYXRjaChhbHBoYW51bWVyaWMpICYmIGxvY2F0aW9uU2VhcmNoQm94LnZhbHVlLmxlbmd0aCA+IDEpe1xuXG5cblx0XHRcdC8vIFJldHVybiBhbiBhcnJheSBvZiB2ZW51ZSBkYXRhIGFuZCB0aGVuIGJ1aWxkIEhUTUwgdG8gZGlzcGxheSB0aGUgcmVzdWx0c1xuXG5cdFx0XHRmb3VyU3F1YXJlSW5zdGFuY2UuZ2V0VmVudWVzTmVhcihsb2NhdGlvblNlYXJjaEJveC52YWx1ZSkudGhlbih2ZW51ZXNBcnJheSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0c0xpc3QgPSByZXN1bHRzTGlzdE1vZHVsZSgpO1xuXHRcdFx0XHRjb25zdCByZXN1bHRzTGlzdEluc3RhbmNlID0gbmV3IHJlc3VsdHNMaXN0KCk7XG5cblxuXHRcdFx0XHRpZiAodmVudWVzQXJyYXkgIT09IFwiZXJyb3JcIiAmJiB2ZW51ZXNBcnJheS5sZW5ndGggPiAwKSB7XG5cblx0XHRcdFx0XHRyZXN1bHRzTGlzdEluc3RhbmNlLmNyZWF0ZVJlc3VsdHNMaXN0KHZlbnVlc0FycmF5LCBzZWFyY2hSZXN1bHRzKTtcblxuXHRcdFx0XHR9IGVsc2V7XG5cblx0XHRcdFx0XHQvLyBJZiB2ZW51ZXNBcnJheSBpcyBlbXB0eSBkaXNwbGF5IE5vIFJlc3VsdHMgbWVzc2FnZVxuXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0cy5pbm5lckhUTUwgPSBgXHQ8aDI+Tm8gUmVzdWx0cyBGb3VuZDwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5ObyB2ZW51ZXMgaGF2ZSBiZWVuIGZvdW5kIGZvciB5b3VyIGxvY2F0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLjwvcD5gO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0fSBlbHNle1xuXG5cdFx0XHQvL0lmIHN0cmluZyBpcyBub24tYWxwaGFudW1lcmljIG9yIGxlc3MgdGhhbiAyIGNoYXJhY3RlcnNcblxuXHRcdFx0c2VhcmNoUmVzdWx0cy5pbm5lckhUTUwgPSBgXHQ8aDI+Tm8gUmVzdWx0cyBGb3VuZDwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPk5vIHZlbnVlcyBoYXZlIGJlZW4gZm91bmQgZm9yIHlvdXIgbG9jYXRpb24uIFBsZWFzZSB0cnkgYWdhaW4uPC9wPmA7XG5cdFx0fVxuXG5cblx0fSk7XG5cbiJdfQ==
