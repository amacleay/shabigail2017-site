#!/bin/bash
NODE_ENV=production webpack --progress --color -p --config ./webpack.prod.config.js
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
