import { REFERENCE, WORMHOLE } from '../../../../../../app/constants/dots'
import { WIKI } from '../../../../../../app/constants/lyrics'

const _addWikiWormholeDotKeyToCard = (card) => {
    const {
        description,
        wormhole
    } = card

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

    } else if (wormhole) {
        // Wormhole cards do not begin with any dot keys.
        card.dotKeys = { [WORMHOLE]: true }
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
        if (dotKeys.narrative && card.dotKeys.afterword) {
            console.log(card)
        }

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

        _addWikiWormholeDotKeyToCard(card)

        // This needs to come after adding wiki dot key to card.
        _addCardDotKeysToAnnotation(card, dotKeys)
    })
}
