let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.listUsers({
		UserPoolId: "us-east-1_7IHKjs5eP",
		AttributesToGet: '[email]',
		PaginationToken: '1'
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		} else {
			console.log(data);
		}
		// your logic goes within this block
	});


	callback(null, 'Successfully executed');
}