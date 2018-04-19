#!/bin/bash
NODE_ENV=production webpack --progress --color -p --config ./webpack.prod.config.js

mkdir build
cp -r dist build
cp -r images build

yarn start & sleep 2;

curl http://localhost:8000/ > build/index.html

pkill node
