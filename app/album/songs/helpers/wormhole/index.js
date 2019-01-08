import { getAnnotation } from 'album/api/annotations'
import { registerWikiAndWormholeLinksForCard } from './helpers'
import { addDestinationWormholeFormats } from './helpers/format'
import { WORMHOLE } from 'constants/dots'

const tempAlbumLinks = {}

const _addTempWormholeLinksFromCard = ({
    songIndex,
    annotation,
    card,
    cardIndex

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
         * verse index. Which is indeed the case, but if it weren't, it would
         * break.
         */
        {
            verseIndex,
            annotationIndex,
            columnIndex
        } = annotation,

        tempLink = {
            songIndex,
            verseIndex,
            annotationIndex,
            columnIndex,
            cardIndex,
            wormholePrefix
        }

    // If it's the first link for this wormhole key, initialise array.
    if (!tempAlbumLinks[wormholeKey]) {
        tempAlbumLinks[wormholeKey] = []
    }

    // Add temp link to temp links array.
    tempAlbumLinks[wormholeKey].push(tempLink)

    // Add wormhole to annotation's dot keys.
    annotation.dotKeys[WORMHOLE] = true

    // Clean up card unit.
    delete card.wormhole
}

const gatherTempWormholeLinks = ({ songs }) => {

    songs.forEach(song => {
        const {
            songIndex,
            annotations
        } = song

        if (annotations) {
            annotations.forEach(annotation => {
                const { cards } = annotation

                cards.forEach((card, cardIndex) => {
                    _addTempWormholeLinksFromCard({
                        songIndex,
                        annotation,
                        card,
                        cardIndex
                    })
                })
            })
        }
    })
}

export const giveEachSourceLinkItsDestination = () => {
    /**
     * For each annotation with a wormhole, add an array of links to all
     * other wormholes.
     */
    for (const linkKey in tempAlbumLinks) {
        const tempLinks = tempAlbumLinks[linkKey]

        tempLinks.forEach((tempLink, index) => {
            const {
                    songIndex,
                    annotationIndex,
                    cardIndex
                } = tempLink,

                // Find the card for this link.
                { cards } = getAnnotation(songIndex, annotationIndex),
                card = cards[cardIndex]

            // Let it know every other link for this wormhole key.
            card.wormholeLinks = tempLinks.filter((nothing, thisIndex) => {

                // Don't add link to its own wormhole.
                return index !== thisIndex
            })
        })

    }
}

export const addWikiWormholeIndices = ({ songs }) => {

    songs.forEach((song) => {
        const {
            songIndex,
            annotations,
            indexedVerses
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
        }

        // TODO: Fix and consolidate this.
        // eslint-disable-next-line no-constant-condition
        if (indexedVerses && false) {
            addDestinationWormholeFormats(indexedVerses)
        }
    })
}

export const addWormholeLinksToCard = () => {
    // Now that each wormhole knows its source index, get destination indices.

    for (const linkKey in tempAlbumLinks) {
        const tempLinks = tempAlbumLinks[linkKey]

        tempLinks.forEach((destinationLink, index) => {
            const {
                    songIndex,
                    annotationIndex,
                    cardIndex,
                    tempSourceWormholeLinks
                } = destinationLink,

                annotation = getAnnotation(songIndex, annotationIndex),
                {
                    cards,
                    tempSourceWormholeIndices
                } = annotation,
                card = cards[cardIndex]

            card.wormholeLinks = tempLinks.filter((nothing, thisIndex) => {

                // Don't add link to its own wormhole.
                return index !== thisIndex

            }).map(sourceLink => {
                const {
                    songIndex,
                    verseIndex,
                    annotationIndex,
                    columnIndex,
                    wormholePrefix
                } = sourceLink
                let sourceWormholeIndex,
                    destinationWormholeIndex

                /**
                 * Add destination wormhole indices. This is as complicated as
                 * it is because of the three "shiv" wormholes.
                 */
                tempSourceWormholeLinks.forEach(tempSourceLink => {

                    const {
                        tempSourceSongIndex,
                        tempSourceAnnotationIndex,
                        tempSourceWormholeIndex
                    } = tempSourceLink

                    if (
                        /**
                         * Links will match only once for each source and
                         * destination pair.
                         */
                        songIndex === tempSourceSongIndex &&
                        annotationIndex === tempSourceAnnotationIndex
                    ) {
                        // Exchange knowledge of source and destination indices.
                        destinationWormholeIndex = tempSourceWormholeIndex
                        sourceWormholeIndex = tempSourceWormholeIndices.shift()
                    }
                })

                return {
                    songIndex,
                    verseIndex,
                    annotationIndex,
                    columnIndex,
                    wormholePrefix,
                    destinationWormholeIndex,
                    sourceWormholeIndex
                }
            })

            // Clean up.
            delete annotation.tempSourceWormholeIndices
        })
    }
}

export const addWormholeStuff = (album) => {
    gatherTempWormholeLinks(album)
    giveEachSourceLinkItsDestination()
    addWikiWormholeIndices(album)
    addWormholeLinksToCard()
}
