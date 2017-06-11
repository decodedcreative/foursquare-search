	import foursquareAPI from './modules/foursquare.js';
	import resultsListModule from './modules/results-list.js';

	// To access FourSquare's API without OAuth authentication the following
	// parameters need to be passed in any GET requests.

	const config = {
		client_id: "L30RQ0B3JMLIXJWLQTJUGMDIDDK3JOOCZQD4VCDOWLQXK1GX",
		client_secret: "MQT4UGE4KM3WKKVJ2DHF1CDOKSQ1OQ1AB352QTIXOB42WQY5",
		version: "20120609",
		mode: "foursquare"
	};


	const fourSquare = foursquareAPI(config);
	const fourSquareInstance = new fourSquare();

	const locationSearchForm = document.querySelector("#venuesByLocation");
	const locationSearchBox = locationSearchForm.querySelector("#location");
	const searchResults = document.querySelector(".search-results");

	document.addEventListener("DOMContentLoaded", function (){
		document.body.classList.add("loaded");
		locationSearchBox.focus();
	});

	locationSearchForm.addEventListener("submit", function (e){
		e.preventDefault();

		const alphanumeric = /^[0-9a-zA-Z]+$/;


		// Check if user has entered alphanumeric string and whether the string is longer than 1 character

		if (locationSearchBox.value.match(alphanumeric) && locationSearchBox.value.length > 1){


			// Return an array of venue data and then build HTML to display the results

			fourSquareInstance.getVenuesNear(locationSearchBox.value).then(venuesArray => {

				const resultsList = resultsListModule();
				const resultsListInstance = new resultsList();


				if (venuesArray !== "error" && venuesArray.length > 0) {

					resultsListInstance.createResultsList(venuesArray, searchResults);

				} else{

					// If venuesArray is empty display No Results message

					searchResults.innerHTML = `	<h2>No Results Found</h2>
												<p>No venues have been found for your location. Please try again.</p>`;
				}

			});

		} else{

			//If string is non-alphanumeric or less than 2 characters

			searchResults.innerHTML = `	<h2>No Results Found</h2>
										<p>No venues have been found for your location. Please try again.</p>`;
		}


	});

