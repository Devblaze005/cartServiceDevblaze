const crypto = require('crypto');
const { executeGetCommand, executeScanCommand, executePutCommand, executeUpdateCommand } = require("./common");
export async function queries(event){
    let requestMethod = event.httpMethod;
    let requestBody = null;
    if(event.body != null){
        requestBody = JSON.parse(event.body);
    }
    let responseBody = null;
    switch(requestMethod){

        case "POST":
            console.log("Method : POST");
            responseBody.cart = await addCart(requestBody);
            responseBody.is_success = true;
            responseBody.message = "Cart added successfully"
            break;
        
        default:
            responseBody.is_success = false;
            responseBody.message = "Invalid Request Method";
    }
    return responseBody;
}

export async function cart_queries(event){
    let requestMethod = event.httpMethod;
    let requestBody = null;
    if(event.body != null){
        requestBody = JSON.parse(event.body);

        
    }
    let responseBody = null;
    if(event.pathParameters != null)
        cart_id = event.pathParameters.cart_id;
    switch(requestMethod){

        case "GET":
            console.log("Method : GET");
            responseBody.cart = await getCart(cart_id);
            responseBody.is_success = true;
            responseBody.message = "Cart Details fetched successfully";
            break;
        
        case "PATCH":
            console.log("Method : PATCH");
            responseBody.cart = await updateCart(cart_id);
            responseBody.is_success = true;
            responseBody.message = "Cart Details updated successfully";
            break;

        default:
            responseBody.is_success = false;
            responseBody.message = "Invalid Request Method";
    }
    return responseBody;
}

export async function getCart(account_id, cart_id){
    if(cart_id == null || account_id == null)
        throw new Error("Invalid cart id");
    let expressionAttributeValues = {};
    expressionAttributeValues[':cart_id'] = cart_id;
    expressionAttributeValues[':account_id'] = account_id;
    const params = {
        TableName: 'Carts_Devblaze',
        KeyConditionExpression: "account_id = :account_id AND cart_id = :cart_id",
        ExpressionAttributeValues: expressionAttributeValues
    }
    const response = await executeGetCommand(params);
    return response;
}

export async function addCart( requestBody){
    if(requestBody == null)
        throw new Error("Invalid Request Body");
    requestBody.cart_id = crypto.randomUUID();
    requestBody.cart_created_at = (new Date()).toString();
    requestBody.cart_updated_at = requestBody.cart_created_at;
    console.log("Request Body : ", requestBody);
    const params = {
        TableName: 'Carts',
        Item: requestBody
    }
    const response = await executePutCommand(params);
    return params.Item;
}

export async function updateCart( requestBody){
    requestBody.cart_updated_at = (new Date()).toString();

    let updateExpression = "set "
    let expressionAttributeValues = {}
    for(let key in requestBody){
        if(requestBody.hasOwnProperty(key)){
            updateExpression += `${key} = :${key},`
            expressionAttributeValues[`:${key}`] = requestBody[`${key}`]
        }
    }
    updateExpression = updateExpression.slice(0, -1);
    const params = {
        TableName: "Carts",
        Key: { "cart_id": cart_id },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues
      };
    
    const response = await executeUpdateCommand(params);
    const cart = await getCart(cart_id)
    return cart;   
}

module.exports.queries = queries;
module.exports.cart_queries = cart_queries;