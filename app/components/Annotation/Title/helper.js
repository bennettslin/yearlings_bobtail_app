import isFinite from '../../../utils/lodash/isfinite'
import isString from '../../../utils/lodash/isstring'

import { getAnnotation } from '../../../album/api/annotations'

import {
    WORMHOLE,
    REFERENCE
} from '../../../constants/dots'

const _getAccessibleWikiWormholesLength = ({
    songIndex,
    annotationIndex,
    dotKeys
}) => {

    const annotation = getAnnotation(
            songIndex,
            annotationIndex
        ),
        { wikiWormholes } = annotation

    if (wikiWormholes) {
        return wikiWormholes.reduce((sum, wikiWormhole) => {
            return (
                (
                    // It's a wiki anchor, and reference dot is selected.
                    isString(wikiWormhole) && dotKeys[REFERENCE]

                ) || (
                    // It's a wormhole index, and wormhole dot is selected.
                    isFinite(wikiWormhole) && dotKeys[WORMHOLE]
                )
            ) ? sum + 1 : sum
        }, 0)

    } else {
        return 0
    }
}

export const getAnnotationTitleData = ({
    songIndex,
    annotationIndex,
    selectedDotKeys
}) => {
    const {
            dotKeys,
            title

        } = getAnnotation(
            songIndex,
            annotationIndex
        ),

        accessibleWikiWormholesLength =
            _getAccessibleWikiWormholesLength({
                songIndex,
                annotationIndex,
                dotKeys: selectedDotKeys
            })

    return {
        dotKeys,
        title,
        accessibleWikiWormholesLength
    }
}
