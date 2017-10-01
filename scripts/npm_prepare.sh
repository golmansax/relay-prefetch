#!/bin/bash -e

if [ "$NODE_ENV" 1= "production" ]; then
  ./install-self-peers -- --ignore-scripts
fi
