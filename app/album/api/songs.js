import album from 'album'

export const getSongsAndLoguesCount = (songs = album.songs) => {
    return songs.length
}

export const getSongsNotLoguesCount = (songs = album.songs) => {
    return songs.length - 2
}

// TODO: Don't pass song object directly.
export const getSongObject = (songIndex, songs = album.songs) => {
    return songs[songIndex]
}

export const getSongIsLogue = (songIndex, songs = album.songs) => {
    return Boolean(songs[songIndex].logue)
}

export const getSongTitle = ({
    songIndex,
    songs = album.songs,
    showIndex = true
}) => {
    const
        song = getSongObject(songIndex, songs),
        isLogue = getSongIsLogue(songIndex, songs)

    return `${showIndex && !isLogue ? songIndex + '. ' : ''}${song.title}`
}

export const getStartingIndexForBook = (bookIndex) => {
    const bookLength = getSongsNotLoguesCount() / 2
    return bookIndex * bookLength + 1
}

export const getBookForSongIndex = (songIndex) => {
    return songIndex < getStartingIndexForBook(1) ? 0 : 1
}
