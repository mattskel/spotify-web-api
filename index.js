var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'a2ff816c53a341db849e76d58e57cd92',
  clientSecret : 'deb4764130d840ca863761a3e781877f',
  redirectUri : 'http://localhost:8888/callback'
});

spotifyApi.setAccessToken('BQCLSyxZBfX7ZIhNxbQmdsXnWNjvgY1iL_OHQS8ZGqHhz_64dQKayP6QfMqta5SSRgkEq76Y5ErjKAVLdqw9e1NYb0MNN_XirzoZBeUv67I3bMIz7U3oIX3vphqr-IQBMAPVEHKnIu7yN3bzzgPFseCyk7YnVssT-1qWYI3WUhj1RkVHZL01XtbA0c54JkR812KOHUXjcsi664MVUT2mMOYzBjCNuGKGLzkPrWI2bAcf3m9X5C2N1Faz1qGVmDkoyMK_9vPSK9foNKEB');

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