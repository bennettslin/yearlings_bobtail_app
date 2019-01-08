/**
 * TODO: This is all a mess, and I no longer have the context for it. Ideally
 * this would be refactored, but I'd imagine it would take several days.
 */
import { getAnnotation } from 'album/api/annotations'
import {
    registerWikiAndWormholeLinksForCard,
    addDestinationWormholeFormats
} from './helpers'
import { WORMHOLE } from 'constants/dots'

const albumWormholeLinks = {}

const _gatherSourceWormholeLinks = ({ songs }) => {

    songs.forEach(song => {

        const {
            annotations,
            songIndex
        } = song

        if (annotations) {
            annotations.forEach(annotation => {
                const {
                    cards,
                    dotKeys
                } = annotation

                cards.forEach((card, cardIndex) => {
                    _storeSourceWormholeLinksForCard({
                        songIndex,
                        annotation,
                        card,
                        cardIndex,
                        dotKeys
                    })
                })
            })
        }
    })
}

const _storeSourceWormholeLinksForCard = ({
    songIndex,
    annotation,
    card,
    cardIndex,
    dotKeys

}) => {
    // Add wormhole link to annotation card.
    const { wormhole } = card

    if (!wormhole) {
        return
    }

    const {
            /**
             * Wormhole is either object or string. If it's an object, then the
             * string we want is the wormholeKey.
             */
            wormholeKey = wormhole,
            wormholePrefix
        } = wormhole,

        /**
         * NOTE: This code assumes that every wormhole is in a verse with a
         * verse index.
         */
        {
            verseIndex,
            annotationIndex,
            columnIndex
        } = annotation,

        wormholeLink = {
            songIndex,
            verseIndex,
            annotationIndex,
            columnIndex,
            cardIndex,
            wormholePrefix
        }

    // If it's the first link for this wormhole key, initialise array.
    if (!albumWormholeLinks[wormholeKey]) {
        albumWormholeLinks[wormholeKey] = []
    }

    // Add wormhole link to wormhole links array.
    albumWormholeLinks[wormholeKey].push(wormholeLink)

    // Add wormhole to dot keys.
    dotKeys[WORMHOLE] = true

    // Clean up card unit.
    delete card.wormhole
}

export const giveEachSourceLinkItsDestination = () => {
    /**
     * For each annotation with a wormhole, add an array of links to all
     * other wormholes.
     */
    for (const linkKey in albumWormholeLinks) {
        const keyLinks = albumWormholeLinks[linkKey]

        keyLinks.forEach((keyLink, index) => {
            const {
                    songIndex,
                    annotationIndex,
                    cardIndex
                } = keyLink,

                // Find the card for this link.
                { cards } = getAnnotation(songIndex, annotationIndex),
                card = cards[cardIndex]

            // Let it know every other link for this wormhole key.
            card.wormholeLinks = keyLinks.filter((nothing, thisIndex) => {

                // Don't add link to its own wormhole.
                return index !== thisIndex
            })
        })

    }
}

export const addWikiWormholeIndices = ({ songs }) => {

    songs.forEach((song) => {
        const {
            annotations,
            songIndex
        } = song

        if (annotations) {
            /**
             * Add wiki and wormhole indices. These can only be determined
             * after collecting wormhole links from the entire album.
             */
            annotations.forEach(annotation => {
                const { cards } = annotation

                cards.forEach(card => {
                    registerWikiAndWormholeLinksForCard({
                        songIndex,
                        annotation,
                        card
                    })
                })
            })

            // TODO: I don't think this works.
            // For each verse in a wormhole, tell wormhole how to format it.
            addDestinationWormholeFormats(song.lyricUnits)
        }
    })
}

/*********
 * FINAL *
 *********/

/**
 * FIXME: This is extremely fragile, as it has to make exceptions for too many
 * special cases, like italics in sub stanzas...
 */

export const addDestinationWormholeIndices = (album) => {
    // Now that each wormhole knows its source index, get destination indices.

    for (const linkKey in albumWormholeLinks) {
        const links = albumWormholeLinks[linkKey]

        // eslint-disable-next-line no-loop-func
        links.forEach((destinationLink, index) => {

            const {
                    songIndex,
                    annotationIndex,
                    cardIndex
                } = destinationLink,

                annotation = getAnnotation(songIndex, annotationIndex, album.songs),
                card = annotation.cards[cardIndex]

            card.wormholeLinks = links.filter((sourceLink, thisIndex) => {
                /**
                 * Add destination wormhole indices. This is as complicated as
                 * it is because of the three "shiv" wormholes.
                 */
                destinationLink.tempSourceWormholeLinks.forEach((tempSourceLink) => {
                    const {
                            tempSourceSongIndex,
                            tempSourceAnnotationIndex,
                            tempSourceWormholeIndex
                        } = tempSourceLink,

                        /**
                         * This will happen only once for each source and
                         * destination pair.
                         */
                        linksMatch = sourceLink.songIndex === tempSourceSongIndex &&
                            sourceLink.annotationIndex === tempSourceAnnotationIndex

                    if (linksMatch) {
                        // Exchange knowledge of source and destination indices.
                        sourceLink.destinationWormholeIndex = tempSourceWormholeIndex
                        sourceLink.sourceWormholeIndex = annotation.tempSourceWormholeIndices.shift()
                    }
                })

                // Don't add link to its own wormhole.
                return index !== thisIndex

            }).map(sourceLink => {

                // Give card a *copy* of this link object.
                const newLink = Object.assign({}, sourceLink)

                // Clean up.
                delete newLink.cardIndex
                delete newLink.tempSourceWormholeLinks

                return newLink
            })

            // Clean up.
            delete annotation.tempSourceWormholeIndices
        })
    }
}

export const addWormholeStuff = (album) => {
    _gatherSourceWormholeLinks(album)
    giveEachSourceLinkItsDestination()
    addWikiWormholeIndices(album)
    addDestinationWormholeIndices(album)
}
