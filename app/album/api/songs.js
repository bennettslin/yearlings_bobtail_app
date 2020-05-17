import songs from '../data/lyrics'
import { finalAlbum } from '..'

export const getSongsAndLoguesCount = () => {
    return songs.length
}

export const getSongsNotLoguesCount = () => {
    return songs.length - 2
}

// TODO: Don't pass song object directly.
export const getSong = songIndex => {
    return songs[songIndex]
}

export const getStartingIndexForBook = (bookIndex) => {
    const bookLength = getSongsNotLoguesCount() / 2
    return bookIndex * bookLength + 1
}

export const getBookForSongIndex = songIndex => {
    return songIndex < getStartingIndexForBook(1) ? 0 : 1
}

const getFinalSongs = () => {
    return finalAlbum.finalSongs
}

export const getFinalSong = songIndex => {
    return getFinalSongs()[songIndex]
}

// TODO: Change to use final song.
export const getSongIsLogue = songIndex => {
    return songIndex === 0 || songIndex === 19
}

export const getTitleForSong = ({
    songIndex,
    showIndex = true
}) => {
    const
        isLogue = getSongIsLogue(songIndex),
        title = getFinalSong(songIndex).title

    return `${showIndex && !isLogue ? songIndex + '. ' : ''}${title}`
}

export const getOverviewForSong = songIndex => {
    return getFinalSong(songIndex).overview
}

export const getEarStatusForSong = songIndex => {
    const {
        hasSideCards,
        isDoublespeaker
    } = getFinalSong(songIndex)

    return {
        hasSideCards,
        isDoublespeaker
    }
}
