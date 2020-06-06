import { getAlbum } from '../builds'
import { getArrayOfLength } from '../../helpers/general'

export const getSongsAndLoguesCount = () => (
    getAlbum().songs.length
)

export const getSongsNotLoguesCount = () => (
    getSongsAndLoguesCount() - 2
)

const getSongIndices = () => (
    getArrayOfLength(getSongsAndLoguesCount())
)

export const getIsSongValid = songIndex => {
    const songIndices = getSongIndices(songIndex)
    return songIndices.some(index => index === songIndex)
}

export const getValidSongIndex = songIndex => (
    getIsSongValid(songIndex) ? songIndex : 0
)

export const getStartingIndexForBook = bookIndex => {
    const bookLength = getSongsNotLoguesCount() / 2
    return bookIndex * bookLength + 1
}

export const getBookForSongIndex = songIndex => (
    songIndex < getStartingIndexForBook(1) ? 0 : 1
)

export const getSong = songIndex => (
    getAlbum().songs[songIndex]
)

export const getSongIsLogue = songIndex => (
    songIndex === 0 || songIndex === getSongsAndLoguesCount() - 1
)

export const getTitleForSong = songIndex => (
    getSong(songIndex).title
)

export const getIndexedTitleForSong = songIndex => {
    const
        isLogue = getSongIsLogue(songIndex),
        title = getTitleForSong(songIndex)

    return !isLogue ?
        `${songIndex}. ${title}` :
        title
}

export const getOverviewForSong = songIndex => (
    getSong(songIndex).overview
)

export const getEarStatusForSong = songIndex => {
    const {
        hasSideCards,
        isDoublespeaker
    } = getSong(songIndex)

    return {
        hasSideCards,
        isDoublespeaker
    }
}
