import { getAnnotationObject } from 'helpers/data'

import {
    WORMHOLE,
    REFERENCE
} from 'constants/dots'

const _getAccessibleWikiWormholesLength = ({
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


const getAnnotationTitleData = ({
    songIndex,
    annotationIndex,
    selectedDotKeys
}) => {
    const {
            dotKeys,
            title

        } = getAnnotationObject(
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

export {
    getAnnotationTitleData
}
