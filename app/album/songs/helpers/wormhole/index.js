import { getAnnotation } from 'album/api/annotations'
import { registerWikiAndWormholeLinksForCard } from './helpers'
import { addDestinationWormholeFormats } from './helpers/format'
import { WORMHOLE } from 'constants/dots'

const albumWormholeLinks = {}

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

const gatherSourceWormholeLinks = ({ songs }) => {

    songs.forEach(song => {

        const {
            songIndex,
            annotations
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

    for (const linkKey in albumWormholeLinks) {
        const keyLinks = albumWormholeLinks[linkKey]

        keyLinks.forEach((destinationLink, index) => {
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

            card.wormholeLinks = keyLinks.filter((nothing, thisIndex) => {

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
    gatherSourceWormholeLinks(album)
    giveEachSourceLinkItsDestination()
    addWikiWormholeIndices(album)
    addWormholeLinksToCard()
}
