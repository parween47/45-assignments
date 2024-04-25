"use strict";
function makeAlbum(NAME, TITLE, TRACK) {
    let dictionary = {
        NAME,
        TITLE
    };
    if (TRACK !== undefined) {
        dictionary['TRACK'] = TRACK;
    }
    return dictionary;
}
let Album1 = makeAlbum("Nusrat fateh ali khan", "Saragam");
let Album2 = makeAlbum("Arijit Singh", "Apna Bta");
let Album3 = makeAlbum("Atif Aslam", "kun faya kun", 7);
console.log(Album1);
console.log(Album2);
console.log(Album3);
