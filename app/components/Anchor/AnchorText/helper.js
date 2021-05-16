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
