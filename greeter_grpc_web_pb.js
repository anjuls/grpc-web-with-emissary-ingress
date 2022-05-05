/**
 * @fileoverview gRPC-Web generated client stub for greeter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greeter = require('./greeter_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeter.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeter.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greeter.HelloRequest,
 *   !proto.greeter.HelloReply>}
 */
const methodDescriptor_Greeter_Hello = new grpc.web.MethodDescriptor(
  '/greeter.Greeter/Hello',
  grpc.web.MethodType.UNARY,
  proto.greeter.HelloRequest,
  proto.greeter.HelloReply,
  /**
   * @param {!proto.greeter.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeter.HelloReply.deserializeBinary
);


/**
 * @param {!proto.greeter.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greeter.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greeter.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greeter.GreeterClient.prototype.hello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greeter.Greeter/Hello',
      request,
      metadata || {},
      methodDescriptor_Greeter_Hello,
      callback);
};


/**
 * @param {!proto.greeter.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greeter.HelloReply>}
 *     Promise that resolves to the response
 */
proto.greeter.GreeterPromiseClient.prototype.hello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greeter.Greeter/Hello',
      request,
      metadata || {},
      methodDescriptor_Greeter_Hello);
};


module.exports = proto.greeter;

