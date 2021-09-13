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
  "Adding 'Metallica'",
  addToCollection("Metallica", "Metallica", 1991)
);
console.log("Adding 'Fortitude'", addToCollection("Fortitude", "Gojira", 2021));
console.log(
  "Adding 'Rumours'",
  addToCollection("Rumours", "Fleetwood Mac", 1977)
);
console.log(
  "Adding 'Earth Crisis'",
  addToCollection("Earth Crisis", "Steel Pulse", 1984)
);
console.log(collection);
