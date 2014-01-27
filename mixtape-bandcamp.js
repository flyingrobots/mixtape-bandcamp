var querystring = require("querystring");
var request = require("request");
var JSONStream = require("JSONStream");

function apiURL(path, query) {
  return "http://api.bandcamp.com/api" + path + "?key=vatnajokull&" + querystring.stringify(query);
}

module.exports.findBands = function(name) {
  var url = apiURL("/band/3/search", {name: name});
  return request(url).pipe(JSONStream.parse("results.*"));
};

module.exports.getAlbums = function(bandId) {
  var url = apiURL("/band/3/discography", {band_id: bandId});
  return request(url).pipe(JSONStream.parse("discography.*.album_id"));
};

module.exports.getTracks = function(albumId) {
  var url = apiURL("/album/2/info", {album_id: albumId});
  return request(url).pipe(JSONStream.parse("tracks.*"));
};
