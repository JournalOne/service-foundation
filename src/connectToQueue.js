'use strict';

const { EXCLUSIVE_QUEUE_NAME } = require('./environment');

const connectToExchange = require('./connectToExchange');

module.exports = async (exchangeName, queueName, topics) => {
  let channel = await connectToExchange(exchangeName);
  channel.prefetch(1);

  let queue = await channel.assertQueue(queueName, { exclusive: queueName === EXCLUSIVE_QUEUE_NAME, durable: queueName !== EXCLUSIVE_QUEUE_NAME });
  for (let topic of topics) {
    await channel.bindQueue(queue.queue, exchangeName, topic);
  }

  return { channel, queue: queue.queue};
};
