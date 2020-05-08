import isFinite from '../../../utils/lodash/isfinite'
import isString from '../../../utils/lodash/isstring'

import { getAnnotation } from '../../../album/api/annotations'

import {
    WORMHOLE,
    REFERENCE
} from '../../../constants/dots'

export const getWikiWormholeIndexForDirection = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    initialWikiWormholeIndex = 1,
    direction

}) => {
    const annotation = getAnnotation(
        selectedSongIndex,
        selectedAnnotationIndex
    )

    if (annotation && annotation.wikiWormholes) {

        const { wikiWormholes } = annotation,
            wikiWormholesCount = wikiWormholes.length

        let returnIndex = initialWikiWormholeIndex,
            counter = 0

        // Consider each anchor index only once.
        while (counter < wikiWormholesCount) {
            // If no direction given, start at first index...
            if (!isFinite(direction)) {
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
            const isWiki = isString(wikiWormholes[returnIndex - 1])
            if (
                (isWiki && selectedDotKeys[REFERENCE]) ||
                (!isWiki && selectedDotKeys[WORMHOLE])
            ) {
                /**
                 * Since wiki wormholes are 1-based, if it's a zero, return the
                 * last one.
                 */
                return returnIndex ? returnIndex : wikiWormholesCount
            }

            counter++
        }
    }

    // There are no valid anchor indices to return.
    return 0
}
