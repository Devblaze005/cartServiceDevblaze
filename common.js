import { config, DynamoDB } from 'aws-sdk';
config.update({region: 'ap-south-1'});
var docClient = new DynamoDB.DocumentClient({paramValidation: false});

async function executePutCommand(params){
    console.log("Params : ", params);
    let response = await docClient.put(params).promise();
    return response;
}

async function executeGetCommand(params){
    console.log("Params : ", params);
    let response = await docClient.get(params).promise();
    if(response != null)
        return response.Item;
}

async function executeUpdateCommand(params){
    console.log("Params : ", params);
    let response = await docClient.update(params).promise();
    return response;
}

async function executeScanCommand(params){
    console.log("Params : ", params);
    let response = await docClient.scan(params).promise();
    return response;
}

async function executeQueryCommand(params){
    console.log("Params : ", params);
    let response = await docClient.query(params).promise();
    if(response != null)
        return response.Items;
}

const _executeQueryCommand = executeQueryCommand;
export { _executeQueryCommand as executeQueryCommand };
const _executePutCommand = executePutCommand;
export { _executePutCommand as executePutCommand };
const _executeGetCommand = executeGetCommand;
export { _executeGetCommand as executeGetCommand };
const _executeUpdateCommand = executeUpdateCommand;
export { _executeUpdateCommand as executeUpdateCommand };
const _executeScanCommand = executeScanCommand;
export { _executeScanCommand as executeScanCommand };