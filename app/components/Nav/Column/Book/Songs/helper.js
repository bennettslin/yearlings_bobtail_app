import album from 'server/album'

export const getStartingIndexForBook = (bookIndex) => {
    const { bookStartingIndices } = album
    return bookStartingIndices[bookIndex]
}
