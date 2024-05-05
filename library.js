const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {

  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];
    console.log (`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`);
  }

};
printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

  for (const tracksId in library.tracks) {
    const tracks = library.tracks[tracksId];
    console.log(`${tracks.id}: ${tracks.name} by ${tracks.artist} (${tracks.album})`)
  }

};
printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {

  const playlist = library.playlists[playlistId];
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`)

  for (let tracksId of playlist.tracks){
    const track = library.tracks[tracksId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
  }

};
printPlaylist("p01");


// adds an existing track to an existing playlist
function addTrackToPlaylist(trackId, playlistId) {
  let specificPlaylist = library.playlists[playlistId];
  specificPlaylist.tracks.push(trackId);
}

// Test the function
console.log('Before adding a new track:', library.playlists.p01);
addTrackToPlaylist('t01', 'p01');
console.log('After adding a new track:', library.playlists.p01);


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

  const newId = 't' + Date.now(); 
    library.tracks[newId] = {
      id: newId,
      name: name,
      artist: artist,
      album: album
  }

};
// Test the function
addTrack("New Song", "New Artist", "New Album");
console.log("Library after adding a track:", library);


// adds a playlist to the library
function addPlaylist(name) {
  const newId = 'p' + Date.now();
    library.playlists[newId] = {
      id: newId,
      name: name,
      tracks: []
  }

};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}