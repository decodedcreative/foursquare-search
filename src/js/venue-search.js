	
	import foursquareAPI from './modules/foursquare.js';
	import resultsListModule from './modules/results-list.js';


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

	locationSearchForm.addEventListener("submit", function (e){
		e.preventDefault();

		fourSquareInstance.getVenuesNear(locationSearchBox.value).then(venuesArray => {
			console.log(venuesArray);

			const resultsList = resultsListModule();
			const resultsListInstance = new resultsList();


			resultsListInstance.createResultsList(venuesArray, searchResults);


		});

	});