var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'a2ff816c53a341db849e76d58e57cd92',
  clientSecret : 'deb4764130d840ca863761a3e781877f',
  redirectUri : 'http://localhost:8888/callback'
});

spotifyApi.setAccessToken('BQCCzHaX5KFMFvPjZ-PEa6DHlmLMb7u0UxI068MPln7HRG4WmJPnWO_udFDn0rYFr1GzIWdsa4XsVTKFSaAZn8ozPKYDo-NArWuL_GaWZXPyI_5_hvm8xCMhaK8ld9NK2QvVaTavQY-oQF0BZhy1aqLwHf8GC4U86FRbNajwuyA2UC-y-0P-Tm8UpoA3Lubp0k9qmNHU4KVzzZUo8egh1FueU3sq_C8F7nAM-1Qn___J8ryr6pD4LJis_3G0kNZHPZuqy2R5BJ8uQTXl');

var myData;

// Get Elvis' albums
//spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
//  .then(function(data) {
//    for (var i=0; i<data.body.items.length; i++) {
//      console.log(data.body.items[i].name);
//    }
//  myData = data;
//  }, function(err) {
//    console.error(err);
//});

//console.log(myData.body);

// Get a user's playlists
//spotifyApi.getUserPlaylists('mattskelley-au')
//  .then(function(data) {
////    console.log('Retrieved playlists', data.body);
//  for(var i = 0; i < data.body.items.length; i++) {
//    console.log(data.body.items[i].name);
//    console.log(data.body.items[i].id);
//  }
//  },function(err) {
//    console.log('Something went wrong!', err);
//});

var userName = 'mattskelley-au';
var playlistId = '7iRWTwN2wWRQ2voCvRZMKq';

spotifyApi.getPlaylist(userName, playlistId)
  .then(function(data) {
    console.log(data.body.name);
  for(var i = 0; i < data.body.tracks.items.length; i++) {
    console.log(data.body.tracks.items[i].track.name);
  }
  }, function(err) {
    console.log('Something went wrong!', err);
});

// Reorder the first two tracks in a playlist to the place before the track at the 10th position
var options = { "range_length" : 2 };
spotifyApi.reorderTracksInPlaylist(userName, playlistId, 0, 10, options)
  .then(function(data) {
    console.log('Tracks reordered in playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

spotifyApi.getPlaylist(userName, playlistId)
  .then(function(data) {
    console.log(data.body.name);
  for(var i = 0; i < 5; i++) {
    console.log(data.body.tracks.items[i].track.name);
  }
  }, function(err) {
    console.log('Something went wrong!', err);
});