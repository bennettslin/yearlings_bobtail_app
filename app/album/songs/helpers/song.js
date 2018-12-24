export const addSongIndicesToSongs = (albumSongs) => {

    albumSongs.forEach((song, songIndex) => {
        song.songIndex = songIndex
    })
}
