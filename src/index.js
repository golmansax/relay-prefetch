const Relay = require('react-relay');
const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function relayPrefetch({ Component, route }) {
  ReactDOM.render(
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
