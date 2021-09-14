console.log("***** Music Collection *****");
// addToCollection
console.log("****** addToCollection ******");

let collection = [];
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}
// Tests
console.log("Adding 'Lateralus'", addToCollection("Lateralus", "TOOL", 2001));
console.log(
  "Adding 'Physical Graffiti'",
  addToCollection("Physical Graffiti", "Led Zeppelin", 1975)
);
console.log(
  "Adding 'Hardwired... to Self-Destruct'",
  addToCollection("Hardwired... to Self-Destruct", "Metallica", 2016)
);
console.log("Adding 'Magma'", addToCollection("Magma", "Gojira", 2016));
console.log(
  "Adding 'Fear Innoculum'",
  addToCollection("Fear Innoculum", "TOOL", 2019)
);
console.log(
  "Adding 'Wish You Were Here'",
  addToCollection("Wish You Were Here", "Pink Floyd", 1975)
);
console.log(collection);

// showCollection
console.log("****** showCollection ******");
function showCollection(collectionArray) {
  console.log(`Collection size: ${collectionArray.length}`);
  for (album of collectionArray) {
    console.log(
      `"${album.title}" by ${album.artist}, published in ${album.yearPublished}`
    );
  }
}
// Tests
console.log("Testing showCollection:");
showCollection(collection);

// findByArtist
console.log("******* findByArtist *******");
function findByArtist(artist) {
  let artistCollection = [];
  for (let album of collection) {
    if (album.artist === artist) {
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
console.log("********  search  ********");
function search(searchObj) {
  if (!searchObj || Object.entries(searchObj).length === 0) {
    return collection;
  }
  let searchCollection = [];
  for (let album of collection) {
    if (
      Object.entries(searchObj).length === 1 &&
      Object.keys(searchObj)[0] === "artist"
    ) {
      if (album.artist === searchObj.artist) {
        searchCollection.push(album);
      }
    } else if (
      Object.entries(searchObj).length === 1 &&
      Object.keys(searchObj)[0] === "year"
    ) {
      if (album.yearPublished === searchObj.year) {
        searchCollection.push(album);
      }
    } else if (
      album.artist === searchObj.artist &&
      album.yearPublished === searchObj.year
    ) {
      searchCollection.push(album);
    }
  }
  return searchCollection;
}

// Tests
console.log(
  "Testing search: TOOL, 2001 (expect 1)",
  search({ artist: "TOOL", year: 2001 })
); // artist AND year match
console.log(
  "Testing search: Metallica (expect 1)",
  search({ artist: "Metallica" })
); // searched for artist only
console.log("Testing search: 1975 (expect 2)", search({ year: 1975 })); // searched for year only
console.log(
  "Testing search: Gojira, 2001 (expect empty)",
  search({ artist: "Gojira", year: 2001 })
); // artist and year present in collection, but not this combination
console.log(
  "Testing search: Led Zeppelin, 1971 (expect empty)",
  search({ artist: "Led Zeppelin", year: 1971 })
); // artist is present but no match for year
console.log("Testing search: empty search obj (expect collection)", search({}));
console.log("Testing search: no search obj (expect collection)", search());
