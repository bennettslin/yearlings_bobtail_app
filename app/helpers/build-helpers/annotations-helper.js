import { PORTAL, REFERENCE } from '../../constants/dots'
import { WIKI } from '../../constants/lyrics'
import { getSongTitle, getAnnotationObject, getVerseObject } from '../data-helper'

/***********
 * INITIAL *
 ***********/

export const registerCards = ({

    albumObject,
    songObject,
    verseObject,
    annotationObject,
    cards,
    annotationDotKeys

}) => {

    // For admin purposes, add to count of annotations with plural cards.
    if (cards.length > 1) {
        songObject.adminPluralCardsCount++
    }

    cards.forEach((cardObject, cardIndex) => {

        _initialPrepareCard(cardObject, annotationDotKeys)
        _addAllDotKeysToAnnotation(cardObject, annotationDotKeys)

        if (_addSourcePortalLink({

            albumObject,
            songObject,
            annotationObject,
            cardObject,
            cardIndex,
            dotKeys: annotationDotKeys

        })) {
            verseObject.verseHasPortal = true
        }
    })
}

const _initialPrepareCard = (cardObject, dotKeys) => {
    const { description } = cardObject

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _getHasWiki(description)

        // Add wiki anchor index to each anchor with wiki.
        if (hasWiki) {
            /**
             * Cards with only portals or references wont initially have an
             * object of dot keys.
             */
            cardObject.dotKeys = cardObject.dotKeys || {}

            // If card has a wiki link, add 'reference' key to dot keys.
            cardObject.dotKeys[REFERENCE] = true
            dotKeys[REFERENCE] = true
        }
    }
}

const _getHasWiki = (descriptionEntity) => {

    if (!descriptionEntity || typeof descriptionEntity !== 'object') {
        return false

    } else if (Array.isArray(descriptionEntity)) {
        return descriptionEntity.reduce((keyFound, childEntity) => {
            return keyFound || _getHasWiki(childEntity)
        }, false)

    } else {
        return Object.keys(descriptionEntity).reduce((keyFound, currentKey) => {
            const hasWiki = !!descriptionEntity[WIKI]

            return keyFound || hasWiki || _getHasWiki(descriptionEntity[currentKey])
        }, false)
    }
}

const _addAllDotKeysToAnnotation = (cardObject, annotationDotKeys) => {
    // Add dot keys to both song and annotation card.
    if (cardObject.dotKeys) {
        Object.keys(cardObject.dotKeys).forEach(dotKey => {
            annotationDotKeys[dotKey] = true
        })
    }
}

const _addSourcePortalLink = ({

    albumObject,
    songObject,
    annotationObject,
    cardObject,
    cardIndex = 0,
    dotKeys

}) => {
    // Add portal link to annotation card.
    const { portal } = cardObject

    if (!portal) {
        return false
    }

    // Portal is either object or string.
    const { portalKey,
            portalPrefix } = portal,

        { songs } = albumObject,
        { tempSongIndex } = songObject,

        { verseIndex,
          annotationIndex,
          columnIndex } = annotationObject,

        portalLink = {
            songIndex: tempSongIndex,
            annotationIndex,
            cardIndex,
            verseIndex,
            columnIndex,
            portalPrefix
        }

    // Add data about portal.
    portalLink.songTitle = getSongTitle({
        songIndex: tempSongIndex,
        songs
    })

    portalLink.verseObject = getVerseObject(tempSongIndex, verseIndex, songs)

    // If first portal link, initialise array.
    if (!albumObject.tempPortalLinks[portalKey || portal]) {
        albumObject.tempPortalLinks[portalKey || portal] = []
    }

    // Add portal link to portal links array.
    albumObject.tempPortalLinks[portalKey || portal].push(portalLink)

    // Add portal key to dot keys.
    dotKeys[PORTAL] = true

    // Clean up card unit.
    delete cardObject.portal

    return true
}

/***********
 * BETWEEN *
 ***********/

export const addDestinationPortalLinks = (albumObject) => {
    /**
     * For each annotation with a portal, add an array of links to all
     * other portals.
     */
    for (const linkKey in albumObject.tempPortalLinks) {
        const links = albumObject.tempPortalLinks[linkKey]

        links.forEach((link, index) => {
            const { songIndex,
                    annotationIndex,
                    cardIndex } = link,

                annotationObject = getAnnotationObject(songIndex, annotationIndex, albumObject.songs),
                cardObject = annotationObject.cards[cardIndex],

                // Don't add link to its own portal.
                portalLinks = links.filter((link, thisIndex) => {
                    return index !== thisIndex

                }).map(link => {

                    // Return a *copy* of the link object.
                    return Object.assign({}, link)
                })

            cardObject.portalLinks = portalLinks
        })
    }
}
