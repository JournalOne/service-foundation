'use strict';

const assertEnvironment = () => {
  let serviceBrokerUrl = process.env.SERVICE_BROKER_URL;

  if (typeof serviceBrokerUrl === 'string' && serviceBrokerUrl.indexOf('amqp://') === 0) {
    return true;
  }

  throw new Error('Fatal: missing or malformed environment variable SERVICE_BROKER_URL');
};

assertEnvironment();

module.exports = {

  SERVICE_BROKER_URL: process.env.SERVICE_BROKER_URL,

  EXCHANGE_TYPE: 'topic',
  EXCLUSIVE_QUEUE_NAME: '',

};
