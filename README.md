# mixtape-bandcamp
Scrapes bandcamp to generate parsed JSONStreams for mixtape.

## Example

    var bandcamp = require("mixtape-bandcamp");
    var JSONStream = require("JSONStream");

    var stringify = JSONStream.stringify();
    stringify.pipe(process.stdout);

    var bands = bandcamp.findBands("daft punk");
    bands.pipe(stringify);
