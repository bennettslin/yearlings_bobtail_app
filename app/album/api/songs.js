import songs from '../../album/songs'

export const getSongsAndLoguesCount = () => {
    return songs.length
}

export const getSongsNotLoguesCount = () => {
    return songs.length - 2
}

// TODO: Don't pass song object directly.
export const getSong = (songIndex) => {
    return songs[songIndex]
}

export const getSongIsLogue = (songIndex) => {
    return songIndex === 0 || songIndex === songs.length - 1
}

export const getSongTitle = ({
    songIndex,
    showIndex = true
}) => {
    const
        song = getSong(songIndex),
        isLogue = getSongIsLogue(songIndex)

    return `${showIndex && !isLogue ? songIndex + '. ' : ''}${song.title}`
}

export const getStartingIndexForBook = (bookIndex) => {
    const bookLength = getSongsNotLoguesCount() / 2
    return bookIndex * bookLength + 1
}

export const getBookForSongIndex = (songIndex) => {
    return songIndex < getStartingIndexForBook(1) ? 0 : 1
}
