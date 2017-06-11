export default (config) => class fourSquare {

	constructor(){
		this.clientid = config.client_id;
		this.secret = config.client_secret;
		this.version = config.version;
		this.mode = config.mode;
	}

	getValuesNear () {

		console.log(this.clientid);

	}
}