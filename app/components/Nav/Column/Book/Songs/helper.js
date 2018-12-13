import album from 'album'

export const getStartingIndexForBook = (bookIndex) => {
    const { bookStartingIndices } = album
    return bookStartingIndices[bookIndex]
}
