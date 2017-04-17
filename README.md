# Journal One microservice foundation

## Install

Needs at least `node v7.6` (`async`, `await` support)

```bash
npm install @journalone/service-foundation
```

## Usage

### Shared listener

One queue is shared between multiple listeners and each get only a subset of messages.

```javascript
const { sharedListener } = require('@journalone/service-foundation');

let exampleListener = sharedListener('exchange-name', 'shared-queue-name', [ 'topic.*' ]);

exampleListener.subscribe((message) => {

  message.getContent();
  message.acknowledge();

});

exampleListener.connect();
```

### Exclusive listener

Every listener has its own queue and gets all messages.

```javascript
const { exclusiveListener } = require('@journalone/service-foundation');

let exampleListener = exclusiveListener('exchange-name', [ 'topic.*' ]);

exampleListener.subscribe((message) => {

  message.getContent();
  message.acknowledge();

});

exampleListener.connect();
```

### Dispatch message

Dispatches a new message

```javascript
const { dispatch } = require('./serviceEndpoint');

let dispatchMessage = dispatch('exchange-name');

dispatchMessage('topic', { /* json encodable object */ });
```
