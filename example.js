#!/usr/bin/env node
var bandcamp = require("./mixtape-bandcamp.js");
var JSONStream = require("JSONStream");

var stringify = JSONStream.stringify();
stringify.pipe(process.stdout);

var bands = bandcamp.findBands("daft punk");
bands.pipe(stringify);
