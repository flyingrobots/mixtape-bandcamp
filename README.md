# mixtape-bandcamp
Scrapes bandcamp to generate parsed JSONStreams for mixtape. More specifically, it wraps the bandcamp REST API to produce streams of JSON objects for your app to consume.

## Example:

    var bandcamp = require("mixtape-bandcamp");
    var JSONStream = require("JSONStream");

    var stringify = JSONStream.stringify();
    stringify.pipe(process.stdout);

    var bands = bandcamp.findBands("daft punk");
    bands.pipe(stringify);
