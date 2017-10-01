# relay-prefetch

Prefetch Relay queries

### Installation
- `yarn add relay-prefetch`
- Currently designed for `react-relay@v0.10.0`

### Usage
```
import relayPrefetch from 'relay-prefetch';
relayPrefetch({
  Component: MyRelayContainer,
  route: {
    name: 'MyRelayRoute',
    queries: { obj: Relay.QL`...` },
    params: {},
  },
});
```
