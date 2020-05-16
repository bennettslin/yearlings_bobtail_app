export const addSongIndices = (albumSongs) => {
    albumSongs.forEach((song, songIndex) => {
        song.songIndex = songIndex
    })
}

export const addOverview = (song, finalSong) => {
    finalSong.overview = song.overview
}

export const addIsDoublespeaker = (song, finalSong) => {
    if (song.isDoublespeaker) {
        finalSong.isDoublespeaker = true
    }
}
