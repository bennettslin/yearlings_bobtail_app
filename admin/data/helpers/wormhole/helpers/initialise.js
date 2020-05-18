import { WORMHOLE } from '../../../../../app/constants/dots'

const _addCardWormholeLinksToTempAlbumLinks = ({
    songIndex,
    annotation,
    wormhole,
    cardIndex,
    tempWormholeLinks

}) => {
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
    if (!tempWormholeLinks[wormholeKey]) {
        tempWormholeLinks[wormholeKey] = []
    }

    // Add temp link to temp links array.
    tempWormholeLinks[wormholeKey].push(tempLink)

    // Add wormhole to annotation's dot keys.
    annotation.dotKeys[WORMHOLE] = true
}

export const initialiseTempWormholeLinks = (
    annotationsList,
    tempWormholeLinks
) => {
    annotationsList.forEach((annotations, songIndex) => {
        if (annotations) {
            annotations.forEach(annotation => {
                const { cards } = annotation

                cards.forEach((card, cardIndex) => {
                    const { wormhole } = card
                    if (wormhole) {
                        _addCardWormholeLinksToTempAlbumLinks({
                            songIndex,
                            annotation,
                            wormhole,
                            cardIndex,
                            tempWormholeLinks
                        })
                    }
                    delete card.wormhole
                })
            })
        }
    })
}
