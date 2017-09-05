//var Spotify = require('spotify-web-api-js');
//var SpotifyWebApi = require('spotify-web-api-js');

//var spotifyApi = new Spotify({
//  clientId : 'a2ff816c53a341db849e76d58e57cd92',
//  clientSecret : 'deb4764130d840ca863761a3e781877f',
//  redirectUri : 'http://localhost:8888/callback'
//});
//
//spotifyApi.setAccessToken('BQCLSyxZBfX7ZIhNxbQmdsXnWNjvgY1iL_OHQS8ZGqHhz_64dQKayP6QfMqta5SSRgkEq76Y5ErjKAVLdqw9e1NYb0MNN_XirzoZBeUv67I3bMIz7U3oIX3vphqr-IQBMAPVEHKnIu7yN3bzzgPFseCyk7YnVssT-1qWYI3WUhj1RkVHZL01XtbA0c54JkR812KOHUXjcsi664MVUT2mMOYzBjCNuGKGLzkPrWI2bAcf3m9X5C2N1Faz1qGVmDkoyMK_9vPSK9foNKEB');
//
//var userName = 'mattskelley-au';
//var playlistId = '7iRWTwN2wWRQ2voCvRZMKq';
//
//spotifyApi.getPlaylist(userName, playlistId)
//  .then(function(data) {
//    console.log(data.body.name);
//  for(var i = 0; i < data.body.tracks.items.length; i++) {
//    console.log(data.body.tracks.items[i].track.name);
//  }
//  }, function(err) {
//    console.log('Something went wrong!', err);
//});

//export function hello() {
//  return "Hello";
//}

//var express = require('express');
//var app = express();
//
//app.use('/js', express.static(__dirname + '/js'));
//app.use('/bower_components', express.static(__dirname + '/../bower_components'));
//app.use('/css', express.static(__dirname + '/css'));
//app.use('/partials', express.static(__dirname + '/partials'));
//
//app.all('/*', function(req, res, next) {
//    // Just send the index.html for other files to support HTML5Mode
//    res.sendFile('index.html', { root: __dirname });
//});