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
