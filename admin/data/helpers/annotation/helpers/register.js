import { REFERENCE } from '../../../../../app/constants/dots'
import { WIKI } from '../../../../../app/constants/lyrics'

const _addWikiDotKeyToCard = (card) => {
    const { description } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _getHasWikiAnchor(description)

        // Add wiki anchor index to each anchor with wiki.
        if (hasWiki) {
            /**
             * Cards with only wormholes or references won't initially have an
             * object of dot keys.
             */
            card.dotKeys = card.dotKeys || {}

            // If card has a wiki link, add 'reference' key to dot keys.
            card.dotKeys[REFERENCE] = true
        }
    }
}

const _getHasWikiAnchor = (description) => {
    if (!description || typeof description !== 'object') {
        return false

    } else if (Array.isArray(description)) {
        return description.find(
            childEntity => (
                _getHasWikiAnchor(childEntity)
            )
        )

    } else {
        return Object.keys(description).find(
            currentKey => {
                const hasWiki = Boolean(description[WIKI])
                return hasWiki || _getHasWikiAnchor(description[currentKey])
            }
        )
    }
}

const _addCardDotKeysToAnnotation = (card, dotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        Object.keys(card.dotKeys).forEach(dotKey => {
            dotKeys[dotKey] = true
        })
    }
}

export const registerCardsDotKeys = ({
    cards,
    dotKeys

}) => {
    cards.forEach((card) => {

        _addWikiDotKeyToCard(card)

        // This needs to come after adding wiki dot key to card.
        _addCardDotKeysToAnnotation(card, dotKeys)
    })
}
