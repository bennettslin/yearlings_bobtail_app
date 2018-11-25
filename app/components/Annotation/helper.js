import {
    WORMHOLE,
    REFERENCE
} from 'constants/dots'

import { getAnnotationObject } from 'helpers/dataHelper'

export const getAccessibleWikiWormholesLength = ({
    songIndex,
    annotationIndex,
    dotKeys
}) => {

    const annotation = getAnnotationObject(
            songIndex,
            annotationIndex
        ),
        { wikiWormholes } = annotation

    if (wikiWormholes) {
        return wikiWormholes.reduce((sum, wikiWormhole) => {
            const typeofWikiWormhole = typeof wikiWormhole

            return (
                (
                    // It's a wiki anchor, and reference dot is selected.
                    typeofWikiWormhole === 'string' &&
                    dotKeys[REFERENCE]

                ) || (
                    // It's a wormhole index, and wormhole dot is selected.
                    typeofWikiWormhole === 'number' &&
                    dotKeys[WORMHOLE]
                )
            ) ? sum + 1 : sum
        }, 0)

    } else {
        return 0
    }
}
