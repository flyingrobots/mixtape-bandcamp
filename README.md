# mixtape-bandcamp
Scrapes bandcamp to generate parsed JSONStreams for mixtape. More specifically, it wraps the bandcamp REST API to produce streams of JSON objects, ready for your app to use.

## Example:

    var bandcamp = require("mixtape-bandcamp");
    var JSONStream = require("JSONStream");

    var stringify = JSONStream.stringify();
    stringify.pipe(process.stdout);

    var bands = bandcamp.findBands("daft punk");
    bands.pipe(stringify);

# Methods

## findBands

Searches the bandcamp bands database and streams the results.

### Example

    var bands = bandcamp.findBands("daft punk");
    bands.on("data", function(data) {
      console.log("Found band: %j", data);
    });

## getAlbums

Looks up the specified band's discography on bandcamp and streams the results.

### Example

    // obtain a band using `findBands`
    var albums = bandcamp.getAlbums(band.band_id);
    // .pipe() `albums` somewhere

## getTracks

Requests tracks for the specified album and streams the results.

### Example

    // obtain an album using `getAlbums`
    var tracks = bandcamp.getTracks(album.album_id);
    // .pipe() `tracks` somewhere
