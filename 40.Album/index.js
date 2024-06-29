function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
;
console.log(make_album("Artist 1", "First album"));
console.log(make_album("Artist 2", "Gold Edition"));
console.log(make_album("Artists", "Most awaited", 25));
