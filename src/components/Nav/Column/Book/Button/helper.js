import { getTitleForSong } from '../../../../../endpoint/album/songs'

export const getIndexCharacter = ({ bookIndex, songIndex }) => {
    if (Number.isFinite(bookIndex)) {
        return bookIndex === 0 ? 'I' : 'II'
    }

    let characterIndex = songIndex

    if (songIndex === 0) {
        characterIndex = 'p'

    } else if (songIndex === 19) {
        characterIndex = 'e'
    }

    return characterIndex
}

export const getButtonTitle = (bookIndex, songIndex) => (
    Number.isFinite(bookIndex) ?
        `Book ${getIndexCharacter({ bookIndex })}` :
        getTitleForSong(songIndex)
)
