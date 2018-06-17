require('isomorphic-fetch');
const fetchMock = require('fetch-mock');
const { expect } = require('chai');
const Relay = require('react-relay/classic');
const relayPrefetch = require('../dist/');

const MyComponent = () => null;
const MyContainer = Relay.createContainer(MyComponent, {
  fragments: {
    starship: () => Relay.QL`fragment on Starship { id }`,
  },
});

describe('relay-prefetch', function () {
  let mock;

  beforeEach(function () {
    mock = fetchMock.mock('/graphql', 200);
  });

  afterEach(function () {
    mock.restore();
  });

  it('does not throw errors', function () {
    relayPrefetch({
      Component: MyContainer,
      route: {
        name: 'TestRoute',
        queries: {
          starship: () => Relay.QL`query { starship(id: $id) }`,
        },
        params: { id: 'testId' },
      },
    });

    // expect(fetchMock.called('/graphql')).to.equal(true);
  });
});
