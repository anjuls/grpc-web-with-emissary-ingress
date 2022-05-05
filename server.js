const PORT = 9090;
const PROTO_PATH = `${__dirname}/greeter.proto`;

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

function doHello(call, callback) {
  callback(null, {
    message: 'Hello! ' + call.request.name
  });
}



function getGrpcServer() {
  const server = new grpc.Server();

  server.addService(protoDescriptor.greeter.Greeter.service, {
    Hello: doHello
  });

  return server;
}

if (require.main === module) {
  var server = getGrpcServer();
  server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server started on port ${PORT}`);
}