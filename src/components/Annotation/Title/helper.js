import { isString } from '../../../helpers/general'

import { getWikiWormholesForAnnotation } from '../../../api/album/annotations'

import {
    WORMHOLE,
    REFERENCE,
} from '../../../constants/dots'

export const getAccessibleWikiWormholesCount = ({
    songIndex,
    annotationIndex,
    selectedDotKeys,
}) => {

    const annotationWikiWormholes = getWikiWormholesForAnnotation(
        songIndex,
        annotationIndex,
    )

    if (annotationWikiWormholes) {
        return annotationWikiWormholes.reduce((sum, wikiWormhole) => {
            return (
                (
                    // It's a wiki anchor, and reference dot is selected.
                    isString(wikiWormhole) && selectedDotKeys[REFERENCE]

                ) || (
                    // It's a wormhole index, and wormhole dot is selected.
                    Number.isFinite(wikiWormhole) && selectedDotKeys[WORMHOLE]
                )
            ) ? sum + 1 : sum
        }, 0)

    } else {
        return 0
    }
}
