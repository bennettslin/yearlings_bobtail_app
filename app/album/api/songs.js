import songs from '../data/lyrics'
import { finalAlbum } from '..'

import { getArrayOfLength } from '../../helpers/general'

const getSongIndices = () => (
    getArrayOfLength(songs.length)
)

export const getSongsAndLoguesCount = () => {
    return songs.length
}

export const getSongsNotLoguesCount = () => {
    return songs.length - 2
}

// TODO: Only used by unit api now.
export const getSong = songIndex => {
    return songs[songIndex]
}

export const getIsSongValid = songIndex => {
    const songIndices = getSongIndices(songIndex)
    return songIndices.some(index => index === songIndex)
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

export const getSongIsLogue = songIndex => {
    return songIndex === 0 || songIndex === getSongsAndLoguesCount() - 1
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
