// Parse annotation data for build.

import keys from 'lodash.keys'

import {
    WORMHOLE,
    REFERENCE
} from 'constants/dots'

import {
    WIKI
} from 'constants/lyrics'

/***********
 * INITIAL *
 ***********/

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
    album,
    song,
    verse,
    annotation,
    cards,
    dotKeys

}) => {
    cards.forEach((card, cardIndex) => {

        if (_addSourceWormholeLink({
            album,
            song,
            annotation,
            card,
            cardIndex,
            dotKeys

        })) {
            verse.tempVerseHasWormhole = true
        }
    })
}

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

const _addSourceWormholeLink = ({

    album,
    song,
    annotation,
    card,
    cardIndex = 0,
    dotKeys

}) => {
    // Add wormhole link to annotation card.
    const { wormhole } = card

    if (!wormhole) {
        return false
    }

    /**
     * Wormhole is either object or string. If it's an object, then the string
     * we want is the wormholeKey.
     */
    const wormholeKey = wormhole.wormholeKey || wormhole,
        { wormholePrefix } = wormhole,
        { songIndex } = song,

        /**
         * NOTE: I wrote this code with the assumption that every wormhole would
         * be in a timed verse, and thus have a verse index. Had there been one
         * that wasn't, such as in a side stanza, this wouldn't work for it!
         */
        {
            verseIndex,
            annotationIndex,
            columnIndex
        } = annotation,

        wormholeLink = {
            songIndex,
            annotationIndex,
            cardIndex,
            columnIndex,
            verseIndex,
            wormholePrefix
        }

    // If first wormhole link, initialise array.
    if (!album.tempWormholeLinks[wormholeKey]) {
        album.tempWormholeLinks[wormholeKey] = []
    }

    // Add wormhole link to wormhole links array.
    album.tempWormholeLinks[wormholeKey].push(wormholeLink)

    // Add wormhole to dot keys.
    dotKeys[WORMHOLE] = true

    // Clean up card unit.
    delete card.wormhole

    return true
}
