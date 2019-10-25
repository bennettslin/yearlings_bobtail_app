const HYPHEN = '-'

export const getWordsForWikiAnchor = text => {
    // First split along space.
    const words = text.split(' ')

    return words.map(word => {

        if (word.includes(HYPHEN)) {
            // Split along hyphen if it has one.
            const subWords = word.split(HYPHEN)

            // Then append a hyphen to all but the last word.
            return subWords.map((subWord, index) => (
                subWord + (index < subWords.length - 1 ? HYPHEN : '')
            ))

        } else {
            return word
        }

    // Flatten array.
    }).flat()
}

export const getSpaceIfNeeded = ({
    words,
    word,
    index
}) => {
    return (
        // Return a space if it's not the last word and...
        index < words.length - 1 &&

        // The word does not end in a hyphen.
        word[word.length - 1] !== '-'
    ) ? ' ' : ''
}
