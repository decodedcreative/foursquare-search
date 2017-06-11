	
	import foursquareAPI from './modules/foursquare.js';


	const config = {
		client_id: "L30RQ0B3JMLIXJWLQTJUGMDIDDK3JOOCZQD4VCDOWLQXK1GX",
		client_secret: "MQT4UGE4KM3WKKVJ2DHF1CDOKSQ1OQ1AB352QTIXOB42WQY5",
		version: "20120609",
		mode: "foursquare"
	};

	const fourSquare = foursquareAPI(config);
	const fourSquareInstance = new fourSquare();


	console.log(fourSquareInstance);