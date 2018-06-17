'use strict';

var Relay = require('react-relay/classic');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = function relayPrefetch(_ref) {
  var Component = _ref.Component,
      route = _ref.route;

  ReactDOM.render(React.createElement(Relay.RootContainer, {
    Component: Component,
    route: route,
    renderFetched: function renderFetched() {
      return null;
    }
  }), document.createElement('div'));
};
