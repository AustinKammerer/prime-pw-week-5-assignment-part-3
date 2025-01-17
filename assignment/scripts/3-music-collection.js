console.log("***** Music Collection *****");
// addToCollection
console.log("****** addToCollection ******");
// Track lists
LateralusTrackList = [
  { name: "The Grudge", duration: "8:36" },
  { name: "Eon Blue Apocalypse", duration: "1:04" },
  { name: "The Patient", duration: "7:13" },
  { name: "Mantra", duration: "1:12" },
  { name: "Schism", duration: "6:47" },
  { name: "Parabol", duration: "3:04" },
  { name: "Parabola", duration: "6:03" },
  { name: "Ticks & Leeches", duration: "8:10" },
  { name: "Lateralus", duration: "9:24" },
  { name: "Disposition", duration: "4:46" },
  { name: "Reflection", duration: "11:07" },
  { name: "Triad", duration: "8:46" },
  { name: "Faaip de Oiad", duration: "2:39" },
];
PhysicalGraffitiTrackList = [
  { name: "Custard Pie", duration: "4:13" },
  { name: "The Rover", duration: "5:36" },
  { name: "In My Time of Dying", duration: "11:04" },
  { name: "Houses of the Holy", duration: "4:01" },
  { name: "Trampled Under Foot", duration: "5:35" },
  { name: "Kashmir", duration: "8:37" },
  { name: "In the Light", duration: "8:44" },
  { name: "Bron-Yr-Aur", duration: "2:06" },
  { name: "Down by the Seaside", duration: "5:14" },
  { name: "Ten Years Gone", duration: "6:31" },
  { name: "Night Flight", duration: "3:36" },
  { name: "The Wanton Song", duration: "4:06" },
  { name: "Boogie with Stu", duration: "3:51" },
  { name: "Black Country Woman", duration: "4:24" },
  { name: "Sick Again", duration: "4:43" },
];
HardwiredTrackList = [
  { name: "Hardwired", duration: "3:10" },
  { name: "Atlas, Rise!", duration: "6:30" },
  { name: "Now That We're Dead", duration: "7:00" },
  { name: "Moth into Flame", duration: "5:52" },
  { name: "Dream No More", duration: "6:30" },
  { name: "Halo on Fire", duration: "8:16" },
  { name: "Confusion", duration: "6:42" },
  { name: "ManUNkind", duration: "6:56" },
  { name: "Here Comes Revenge", duration: "7:18" },
  { name: "Am I Savage?", duration: "6:30" },
  { name: "Murder One", duration: "5:46" },
  { name: "Spit Out the Bone", duration: "7:10" },
  { name: "Test Track", duration: "0:00" },
];
MagmaTrackList = [
  { name: "The Shooting Star", duration: "5:42" },
  { name: "Silvera", duration: "3:33" },
  { name: "The Cell", duration: "3:18" },
  { name: "Stranded", duration: "4:29" },
  { name: "Yellow Stone", duration: "1:19" },
  { name: "Magma", duration: "6:42" },
  { name: "Pray", duration: "5:14" },
  { name: "Only Pain", duration: "4:00" },
  { name: "Low Lands", duration: "6:04" },
  { name: "Liberation", duration: "3:35" },
  { name: "Test Track", duration: "0:00" },
];
FearInnoculumTrackList = [
  { name: "Fear Innoculum", duration: "10:21" },
  { name: "Pneuma", duration: "11:53" },
  { name: "Invincible", duration: "12:44" },
  { name: "Descending", duration: "13:37" },
  { name: "Culling Voices", duration: "10:05" },
  { name: "Chocolate Chip Trip", duration: "4:47" },
  { name: "7empest", duration: "15:44" },
];
WishYouWereHereTrackList = [
  { name: "Shine On You Crazy Diamond (I - V)", duration: "13:32" },
  { name: "Welcome to the Machine", duration: "7:28" },
  { name: "Have a Cigar", duration: "5:08" },
  { name: "Wish You Were Here", duration: "5:35" },
  { name: "Shine On You Crazy Diamond (VI - IX)", duration: "12:28" },
];

let collection = [];
function addToCollection(title, artist, yearPublished, trackList) {
  // creating a new album object
  let album = {
    // setting album object values with passed in arguments
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    trackList: trackList,
  };
  // adding albumm to collection array
  collection.push(album);
  return album;
}
// Tests
console.log(
  "Adding 'Lateralus'",
  addToCollection("Lateralus", "TOOL", 2001, LateralusTrackList)
);
console.log(
  "Adding 'Physical Graffiti'",
  addToCollection(
    "Physical Graffiti",
    "Led Zeppelin",
    1975,
    PhysicalGraffitiTrackList
  )
);
console.log(
  "Adding 'Hardwired... to Self-Destruct'",
  addToCollection(
    "Hardwired... to Self-Destruct",
    "Metallica",
    2016,
    HardwiredTrackList
  )
);
console.log(
  "Adding 'Magma'",
  addToCollection("Magma", "Gojira", 2016, MagmaTrackList)
);
console.log(
  "Adding 'Fear Innoculum'",
  addToCollection("Fear Innoculum", "TOOL", 2019, FearInnoculumTrackList)
);
console.log(
  "Adding 'Wish You Were Here'",
  addToCollection(
    "Wish You Were Here",
    "Pink Floyd",
    1975,
    WishYouWereHereTrackList
  )
);
console.log(collection);

// showCollection
// updated to show track lists
console.log("****** showCollection ******");
function showCollection(collectionArray) {
  // printing collection size
  console.log(`Collection size: ${collectionArray.length}`);
  // looping over passed in array
  for (album of collectionArray) {
    // printing album title, artist and year
    console.log(
      `"${album.title}" by ${album.artist}, published in ${album.yearPublished}:`
    );
    // looping over the album's track list
    for (let i = 0; i < album.trackList.length; i++) {
      // printing each track and its duration
      console.log(
        `${i + 1}. ${album.trackList[i].name}: ${album.trackList[i].duration}`
      );
    }
  }
}

// Tests
console.log("Testing showCollection:");
showCollection(collection);

// findByArtist
console.log("******* findByArtist *******");
function findByArtist(artist) {
  // creating the search result array
  let artistCollection = [];
  // looping over the 'collection' array
  for (let album of collection) {
    // for each album in the array, checking if artist matches the passed in artist
    if (album.artist === artist) {
      // adding any matches to the result array
      artistCollection.push(album);
    }
  }
  return artistCollection;
}
// Tests
console.log("Testing findByArtist: find TOOL (expect 2)", findByArtist("TOOL"));
console.log(
  "Testing findByArtist: find Metallica (expect 1)",
  findByArtist("Metallica")
);
console.log(
  "Testing findByArtist: find The Beatles (expect 0)",
  findByArtist("The Beatles")
);

// Stretch Goals
// search - searchObj may contain 'artist' and/or 'year' or may be empty or undefined
// updated - searchObj may contain 'trackName' (artist optional)

console.log("********  search  ********");
function search(searchObj) {
  // creating search results array
  let searchCollection = [];
  // checking if search object exists or is empty
  if (!searchObj || Object.entries(searchObj).length === 0) {
    // returns 'collection' if search object isn't passed or is empty
    return collection;
  } //end falsey/empty searchObj conditional
  // if a search object is passed in
  else {
    // loop over 'collection' in order to compare each album to passed in search object
    for (let album of collection) {
      // checks if search object contatins only one property
      if (Object.entries(searchObj).length === 1) {
        // switch statement to look at the search object's single key
        switch (Object.keys(searchObj)[0]) {
          // checks if that property's key is 'artist'
          case "artist":
            // checks if the current album in the loop matches the passed in artist
            if (album.artist === searchObj.artist) {
              // adds any matches to the results array
              searchCollection.push(album);
            }
            break; //end case code
          // checks if that property's key is 'year'
          case "year":
            // checks if the current album in the loop matches the passed in year
            if (album.yearPublished === searchObj.year) {
              // adds any matches to the results array
              searchCollection.push(album);
            }
            break; //end case code
          // checks if that property's key is 'trackName'
          case "trackName":
            // loops over the current album's track list array
            for (let track of album.trackList) {
              // checks if any track in the current album has the same name as the passed in track name
              if (track.name === searchObj.trackName) {
                // adds the current album to the results array if a track name match is found
                searchCollection.push(album);
              }
            }
            break;
        }
      } // end searchObj one-property senario
      else if (
        // searchObj has two properties:
        // checks if the artist passed in matches the current album in the loop
        album.artist === searchObj.artist
      ) {
        // checks if the year of searchObj and current album match
        if (album.yearPublished === searchObj.year) {
          // adds any matching albums to the results array
          searchCollection.push(album);
        } else {
          // loops over the current album's trackList array
          for (let track of album.trackList) {
            // checks if the track name of searchObj and current album match
            if (track.name === searchObj.trackName) {
              // adds the current album to the results array if a track name match is found
              searchCollection.push(album);
            }
          }
        }
      } //end searchObj two-property senario
    } //end loop over 'collection'
  } //end searchObj with one or two properties conditional
  // returns the results array when search is complete
  return searchCollection;
}

// search Tests
// artist AND year match:
console.log(
  "Testing search: TOOL, 2001 (expect 1)",
  search({ artist: "TOOL", year: 2001 })
);
// search for artist only:
console.log(
  "Testing search: Metallica (expect 1)",
  search({ artist: "Metallica" })
);
// search for artist only (two results):
console.log("Testing search: TOOL (expect 2)", search({ artist: "TOOL" }));
// search for year only (two results):
console.log("Testing search: 1975 (expect 2)", search({ year: 1975 }));
// artist and year present in collection, but not this combination:
console.log(
  "Testing search: Gojira, 2001 (expect empty)",
  search({ artist: "Gojira", year: 2001 })
);
// artist is present but no match for year:
console.log(
  "Testing search: Led Zeppelin, 1971 (expect empty)",
  search({ artist: "Led Zeppelin", year: 1971 })
);
// search with empty searchObj:
console.log("Testing search: empty search obj (expect collection)", search({}));
// search with no searchObj:
console.log("Testing search: no search obj (expect collection)", search());

// track search Tests
// search for trackName only, artist has multiples albums:
console.log(
  "Testing track search: Schism (expect 1)",
  search({ trackName: "Schism" })
);
// search for trackName only, artist has multiples albums:
console.log(
  "Testing track search: 7empest (expect 1)",
  search({ trackName: "7empest" })
);
// search for artist and trackName:
console.log(
  "Testing track search: Gojira, Stranded (expect 1)",
  search({ artist: "Gojira", trackName: "Stranded" })
);
// search for artist and trackName, track not in collection:
console.log(
  "Testing track search: Metallica, Nothing Else Matters (expect empty)",
  search({ artist: "Metallica", trackName: "Nothing Else Matters" })
);
// search for trackName only, not in collection:
console.log(
  "Testing track search: Stairway to Heaven (expect empty)",
  search({ trackName: "Stairway to Heaven" })
);
// testing for tracks with same name on different albums
console.log(
  "Testing track search: Test Track (expect 2)",
  search({ trackName: "Test Track" })
);
