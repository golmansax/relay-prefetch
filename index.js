const Relay = require('react-relay');
const React = require('react');

module.exports = function relayPrefetch({ Component, route }) {
  render(
    React.createElement(
      Relay.RootContainer,
      {
        Component,
        route,
        renderFetched: () => null,
      },
    ),
    document.createElement('div'),
  );
};
