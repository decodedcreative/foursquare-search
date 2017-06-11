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

					console.log(data);

					const venues = data.response.groups[0].items;
					let venueAddress = "";

					const venuesArray = venues.map((venueObj) =>{

						if (venueObj.venue.location.address.length > 0) {
							venueAddress = venueObj.venue.location.address;
						}

					return {
						name: venueObj.venue.name,
						address: venueObj.venue.location.address
					}
				});

				return venuesArray;


			})
		.catch(function(error) {
			return "error";
		});


	}
}