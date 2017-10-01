#!/bin/bash -e

if [ "$NODE_ENV" != "production" ]; then
  ./install-self-peers -- --ignore-scripts
fi
