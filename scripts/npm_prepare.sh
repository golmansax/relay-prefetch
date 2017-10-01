#!/bin/bash -e

if [ "$NODE_ENV" != "production" ]; then
  ./node_modules/.bin/install-self-peers -- --ignore-scripts
fi
