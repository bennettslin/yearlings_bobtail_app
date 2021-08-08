import { flatten } from '../../../helpers/general'

const HYPHEN = '-'

export const getWordsForWikiAnchor = text => {
    // First split along space.
    const words = text.split(' ').map(word => {

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
    })

    // Finally, flatten array. Just need one level deep.
    return flatten(words)
}

export const getSpaceForWikiAnchorIfNeeded = ({
    isWikiAnchor,
    words,
    word,
    index,
}) => (
    isWikiAnchor &&

    // Return a space if it's not the last word and...
    index < words.length - 1 &&

    // The word does not end in a hyphen.
    word[word.length - 1] !== '-' ?
        ' ' : ''
)
