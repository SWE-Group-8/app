const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let payload = event.prev.result;
        payload.order_id = uuidv4();

        // create a new order
        await createOrder(payload);

        // links books with the order
        await createDansOrder(payload);

        // Note - You may add another function to email the invoice to the user

        return "SUCCESS";
    } catch (err) {
        console.log(err);
        return new Error(err);
    }
}; //creates new order and DansOrder
