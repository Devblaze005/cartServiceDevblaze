const { cart_queries, queries } = require("./cart");
export const handler = async (event) => {
    try{
        console.log("Event : ", event);
        const responseBody = await delegateRequest(event);
        console.log("Response : ", responseBody);
        return formatResponse(responseBody);
    }
    catch(exception){
        let errorBody = {};
        errorBody.error = exception;
        console.log("Exception is : ", exception);
        console.log("Error in response : ", errorBody);
        return formatError(errorBody);
    }
  };

async function delegateRequest(event){
    let resource = event.resource;
    let responseBody = {};
    switch(resource){
        case "/carts": responseBody = await queries(event); break;
        case "/carts/{cart_id}": responseBody = await cart_queries(event); break;
        default: console.log("Invalid resource"); responseBody.message = "Invalid Resource"; responseBody.is_success = false;
    }
    console.log("ResponseBody : ", responseBody);
    return responseBody;
}

async function formatResponse(responseBody){
    const response = {
        "isBase64Encoded": true,
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        };
    return response;
}
  
function formatError(errorBody){
    const error = {
        "isBase64Encoded": true,
        "statusCode": 200,
        "bo": JSON.stringify(errorBody)
    };
    return error;
}