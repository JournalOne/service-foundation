'use strict';

const { Observable } = require('rxjs');
const connectToQueue = require('./connectToQueue');
const ServiceMessage = require('./ServiceMessage');

module.exports = (exchangeName, queueName, topics) => {
  let observable = Observable.create((observer) => {
    connectToQueue(exchangeName, queueName, topics)
      .then(({ channel, queue }) =>
        channel.consume(
          queue,
          (message) => observer.next(new ServiceMessage(message, channel)),
          { noAck: false }
        )
      );
  });

  return observable.publish();
};
