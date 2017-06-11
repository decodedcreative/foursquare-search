export default (config) => class fourSquare {

	constructor(){
		this.clientid = config.client_id;
		this.secret = config.client_secret;
		this.version = config.version;
		this.mode = config.mode;
	}

	getVenuesNear (location) {
		const apiURL = `https://api.foursquare.com/v2/venues/explore?near=${location}&client_id=${this.clientid}&client_secret=${this.secret}&v=${this.version}&m=${this.mode}`;

		console.log(apiURL);

	}
}