const { expect } = require('chai');
const Relay = require('react-relay');
const relayPrefetch = require('../');

const MyComponent = () => null;
const MyContainer = Relay.createContainer(MyComponent, {
  fragments: {
  },
});

describe('relay-prefetch', function () {
  it('does not throw errors', function () {
    relayPrefetch({
      Component: MyContainer,
      route: {},
    });
  });
});
