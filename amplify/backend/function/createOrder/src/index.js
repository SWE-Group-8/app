const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "Order-3k6luoclnrgjzcs2bbqz3rshjm-dev";
const ORDER_TYPE = "Order";
const DANS_ORDER_TABLE = "DansOrder-3k6luoclnrgjzcs2bbqz3rshjm-dev";
const DANS_ORDER_TYPE = "DansOrder";

const createOrder = async (payload) => {
    const { order_id, username, email, total } = payload;
    var params = {
        TableName: ORDER_TABLE,
        Item: {
            id: order_id,
            __typename: ORDER_TYPE,
            customer: email,
            user: username,
            total: total,
            updatedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        }
    };
    console.log(params);
    await documentClient.put(params).promise();
};

const createDansOrder = async (payload) => {
    let dansOrders = [];
    for (i = 0; i < payload.cart.length; i++) {
        const cartItem = payload.cart[i];
        dansOrders.push({
            PutRequest: {
                Item: {
                    id: uuidv4(),
                    __typename: DANS_ORDER_TYPE,
                    dans_id: cartItem.id,
                    order_id: payload.order_id,
                    customer: payload.email,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            }
        });
    }
    let params = {
        RequestItems: {}
    };
    params["RequestItems"][DANS_ORDER_TABLE] = dansOrders;
    console.log(params);
    await documentClient.batchWrite(params).promise();
};

exports.handler = async (event) => {
    try {
        let payload = event.prev.result;
        payload.order_id = uuidv4();

        // create a new order
        await createOrder(payload);

        // links dans with the order
        await createDansOrder(payload);

        // Note - You may add another function to email the invoice to the user

        return "SUCCESS";
    } catch (err) {
        console.log(err);
        return new Error(err);
    }
}; //creates new order and DansOrder
