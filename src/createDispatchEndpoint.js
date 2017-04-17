'use strict';

const connectToExchange = require('./connectToExchange');

module.exports = (exchangeName) => {
  let channelPromise = connectToExchange(exchangeName);

  return (topic, messageBody) => {
    channelPromise.then((channel) => {
      let messageBodyBuffer = Buffer.from(JSON.stringify(messageBody));
      channel.publish(exchangeName, topic, messageBodyBuffer);
    });
  };
};
