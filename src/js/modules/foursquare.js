export default (config) => class fourSquare {
	
	constructor(){
		this.clientid = config.client_id;
		this.secret = config.client_secret;
		this.version = config.version;
		this.mode = config.mode;
	}

	getVenuesNear (location) {
		const apiURL = `https://api.foursquare.com/v2/venues/explore?near=${location}&client_id=${this.clientid}&client_secret=${this.secret}&v=${this.version}&m=${this.mode}`;

		return fetch(apiURL)
			.then((response) => response.json())
				.then(function(data) {

					const venues = data.response.groups[0].items;
					let venueAddress = "";
					let rating = 0;
					const venuesArray = venues.map((venueObj) =>{

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
					}
				});

				return venuesArray;


			})
		.catch(function(error) {
			return "error";
		});
	}

}