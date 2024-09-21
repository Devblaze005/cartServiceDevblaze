import { handler } from './index.mjs'
var event = {
  resource: '/carts',
  path: '/carts',
  httpMethod: 'POST',
  headers: null,
  multiValueHeaders: null,
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    resourceId: 'w63smo',
    resourcePath: '/carts',
    httpMethod: 'POST',
    extendedRequestId: 'VzggCEkphcwFaZA=',
    requestTime: '06/Apr/2024:13:01:13 +0000',
    path: '/carts',
    accountId: '093810856891',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1712408473511,
    requestId: '2c498700-6927-4551-bcc1-946e7b1fa5f0',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:sts::093810856891:assumed-role/AWSReservedSSO_AdministratorAccess_e8c6f2ffb3fc8c56/Prabhjot',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      accountId: '093810856891',
      caller: 'AROARLV4QCO5Y646OUQIK:Prabhjot',
      sourceIp: 'test-invoke-source-ip',
      accessKey: 'ASIARLV4QCO5WLPKCIVS',
      cognitoAuthenticationProvider: null,
      user: 'AROARLV4QCO5Y646OUQIK:Prabhjot'
    },
    domainName: 'testPrefix.testDomainName',
    apiId: 'elobekvir3'
  },
    body: '{\r\n' +
'                "account_id" : "abcdefghi",\r\n' +
'                "primary_account_holder_id": "user12345",\r\n' +
'                "shared_account_holders": ["GuestUser12345"],\r\n' +
'                }'
  }
handler(event);