console.log("***** Music Collection *****");
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

console.log("****** showCollection ******");
function showCollection(collectionArray) {
  console.log(`Collection size: ${collectionArray.length}`);
  for (album of collectionArray) {
    console.log(
      `"${album.title}" by ${album.artist}, published in ${album.yearPublished}`
    );
  }
}
console.log("Testing showCollection:");
showCollection(collection);

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
console.log("********  search  ********");
function search(searchObj) {
  if (!searchObj || Object.entries(searchObj).length === 0) {
    return collection;
  }
  let searchCollection = [];
  for (let album of collection) {
    if (
      album.artist === searchObj.artist &&
      album.yearPublished === searchObj.year
    ) {
      searchCollection.push(album);
    }
  }
  return searchCollection;
}
console.log(
  "Testing search: TOOL, 2001 (expect 1)",
  search({ artist: "TOOL", year: 2001 })
);
console.log(
  "Testing search: Metallica, 2001 (expect empty)",
  search({ artist: "Metallica", year: 2001 })
);
console.log("Testing search: empty search obj (expect collection)", search({}));
console.log("Testing search: no search obj (expect collection)", search());
