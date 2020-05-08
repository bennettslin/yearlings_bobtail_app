import isFinite from '../../../../../../utils/lodash/isfinite'

export const getIndexCharacter = ({ bookIndex, songIndex }) => {
    if (isFinite(bookIndex)) {
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
