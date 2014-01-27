var bandcamp = require("./mixtape-bandcamp.js");
var test = require("tap").test;

function isError(obj) {
  return obj.hasOwnProperty("error");
}

var examples = {
  bandName: "daft punk",
  bandId: 203035041,
  albumId: 2587417518
};

test("findBands", function(t) {
  bandcamp.findBands(examples.bandName)
  .on("data", function(data) {
    t.notOk(isError(data), "Finds bands without errors");
  })
  .on("end", function(){t.end();});
});

test("getAlbums", function(t) {
  bandcamp.getAlbums(examples.bandId)
  .on("data", function(data) {
    t.notOk(isError(data), "Finds albums without errors");
  })
  .on("end", function(){t.end();});
});

test("getTracks", function(t) {
  bandcamp.getTracks(examples.albumId)
  .on("data", function(data) {
    t.notOk(isError(data), "Finds tracks without errors");
  })
  .on("end", function(){t.end();});
});
