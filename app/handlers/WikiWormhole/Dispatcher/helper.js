import { isString } from '../../../helpers/general'

import { getWikiWormholesForAnnotation } from '../../../api/album/annotations'

import {
    WORMHOLE,
    REFERENCE,
} from '../../../constants/dots'

export const getWikiWormholeIndexForDirection = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    initialWikiWormholeIndex = 1,
    direction,

}) => {
    const annotationWikiWormholes = getWikiWormholesForAnnotation(
        selectedSongIndex,
        selectedAnnotationIndex
    )

    if (annotationWikiWormholes) {
        const wikiWormholesCount = annotationWikiWormholes.length

        // Wiki wormholes are 1-based, so subtract 1 here.
        let returnIndex = initialWikiWormholeIndex - 1,
            counter = 0

        // Consider each anchor index only once.
        while (counter < wikiWormholesCount) {
            // If no direction given, start at first index...
            if (!Number.isFinite(direction)) {
                direction = 0

            // ... then proceed in forward direction.
            } else if (direction === 0) {
                direction = 1
            }

            returnIndex =
                (returnIndex + wikiWormholesCount + direction) %
                wikiWormholesCount

            /**
             * It's valid if it's a wiki anchor and reference dot is selected,
             * or it's a wormhole index and wormhole dot is selected. Remember
             * that wiki wormholes are 1-based.
             */
            const
                wikiWormholeEntity = annotationWikiWormholes[returnIndex],
                isWiki = isString(wikiWormholeEntity),
                isWormhole = Number.isFinite(wikiWormholeEntity)

            if (
                (isWiki && selectedDotKeys[REFERENCE]) ||
                (isWormhole && selectedDotKeys[WORMHOLE])
            ) {
                // Wiki wormholes are 1-based, so add 1 here.
                return returnIndex + 1
            }

            counter++
        }
    }

    // There are no valid anchor indices to return.
    return 0
}
