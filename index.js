'use strict';

const { EXCLUSIVE_QUEUE_NAME } = require('./src/environment');

const createListenerEndpoint = require('./src/createListenerEndpoint');
const createDispatchEndpoint = require('./src/createDispatchEndpoint');

module.exports = {
  sharedListener: (exchangeName, queueName, topics = [ '#' ]) => createListenerEndpoint(exchangeName, queueName, topics),
  exclusiveListener: (exchangeName, topics = [ '#' ]) => createListenerEndpoint(exchangeName, EXCLUSIVE_QUEUE_NAME, topics),
  dispatch: createDispatchEndpoint
};
