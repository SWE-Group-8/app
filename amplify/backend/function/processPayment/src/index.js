//import config from '../aws-exports';
//const { aws_user_pools_id } = config
const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_GNjkn1yhb";
const stripe = require("stripe")("sk_test_51KsGSpExUMlfZ1zN4S9inrum89ZVRK9OIgmlk8bNT1FSdd1H7BwVInWYHLNlJBhljJtEKuvJKacabUZx2YnPJoMT00961lhTmL");

const getUserEmail = async (event) => {
    const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username
    };
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
        if (attr.Name === "email") {
            return attr.Value;
        }
    });
    return email;
};

exports.handler = async (event) => {
    try {
        const { id, cart, total, address, token } = event.arguments.input;
        const { username } = event.identity.claims;
        const email = await getUserEmail(event);

        await stripe.charges.create({
            amount: total * 100,
            currency: "usd",
            source: token,
            description: `Order ${new Date()} by ${email}`
        });
        return { id, cart, total, address, username, email };
    } catch (err) {
        throw new Error(err);
    }
}; //gets total price of order and charges the customer