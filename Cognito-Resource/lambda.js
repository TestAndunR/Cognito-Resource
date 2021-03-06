let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
const ses = new AWS.SES();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.listUsers({
		UserPoolId: "us-east-1_7IHKjs5eP",
		Filter: 'email="andun@adroitlogic.com"'
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		} else {
			console.log(data);
		}
		// your logic goes within this block
	});


	cognito_idp.adminGetUser({
		UserPoolId: "us-east-1_7IHKjs5eP", /* required */
		Username: "andun" /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Error occured");
			throw error;
		} else {
			console.log("Success");
			console.log(data);
		}
		// your logic goes within this block

	});

	cognito_idp.adminEnableUser({
		UserPoolId: "us-east-1_7IHKjs5eP", /* required */
		Username: "andunranmal2" /* required */
	}, function (error, data) {
		if (error) {
			console.log("error occured");
			// implement error handling logic here
			throw error;
		} else {
			console.log("Success");
			console.log(data);
		}
		// your logic goes within this block
	});

	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'UserPoolDB'
	}, function (error, connection) {
		if (error) { throw err; }
	});




	callback(null, 'Successfully executed');
}