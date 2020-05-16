export const addSongIndices = (albumSongs) => {

    albumSongs.forEach((song, songIndex) => {
        song.songIndex = songIndex
    })
}
