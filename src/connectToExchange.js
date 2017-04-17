'use strict';

const { SERVICE_BROKER_URL, EXCHANGE_TYPE } = require('./environment');

const { connect } = require('amqplib');

let connectionPromise = connect(SERVICE_BROKER_URL);

module.exports = async (exchangeName) => {
  let connection = await connectionPromise;
  let channel = await connection.createChannel();

  await channel.assertExchange(exchangeName, EXCHANGE_TYPE);

  return channel;
};
