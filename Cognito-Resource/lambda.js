let AWS = require('aws-sdk');
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
			throw error;
		}
		// your logic goes within this block
	});


	callback(null, 'Successfully executed');
}