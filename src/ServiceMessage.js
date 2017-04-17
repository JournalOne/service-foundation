'use strict';

class ServiceMessage {
  constructor (message, channel) {
    this.message = message;
    this.channel = channel;
  }

  acknowledge () {
    this.channel.ack(this.message);
  }

  getContent () {
    return JSON.parse(this.message.content.toString());
  }
}

module.exports = ServiceMessage;
