const  { HelloRequest, HelloReply} = require('./greeter_pb.js');
const  { GreeterClient } = require('./greeter_grpc_web_pb.js');

const client = new GreeterClient('http://localhost');
// console.log(client)

var request = new HelloRequest();

request.setName('Ambassador!');

// var metadata = { 'Allow-Control-Allow-Origin': '*', };

client.hello(request, {}, (err, response) => {
  console.log(response.getMessage());
});
