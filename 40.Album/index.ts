function make_album(artist: string, title: string, tracks?: number){
    let album = {artist , title};
    if(tracks){
        album["tracks"]= tracks
    }
    return album;
};

console.log(make_album("Artist 1", "First album"));
console.log(make_album("Artist 2", "Gold Edition"));
console.log(make_album("Artists", "Most awaited", 25))