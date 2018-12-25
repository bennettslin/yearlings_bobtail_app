// TODO: Separate further into smaller files?

import keys from 'lodash.keys'

import { REFERENCE } from 'constants/dots'
import { WIKI } from 'constants/lyrics'

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

const _getHasWikiAnchor = (descriptionEntity) => {
    if (!descriptionEntity || typeof descriptionEntity !== 'object') {
        return false

    } else if (Array.isArray(descriptionEntity)) {
        return descriptionEntity.find(childEntity => (
            _getHasWikiAnchor(childEntity)
        ))

    } else {
        return keys(descriptionEntity).find(currentKey => {
            const hasWiki = Boolean(descriptionEntity[WIKI])
            return hasWiki || _getHasWikiAnchor(descriptionEntity[currentKey])
        })
    }
}

const _addCardDotKeysToAnnotation = (card, dotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        keys(card.dotKeys).forEach(dotKey => {
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

export const registerCardsWormholes = ({
    verse,
    cards

}) => {
    cards.forEach((card) => {
        if (card.wormhole) {
            verse.tempVerseHasWormhole = true
        }
    })
}
