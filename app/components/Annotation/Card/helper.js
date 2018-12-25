import { getAnnotationCardObject } from 'album/api/annotations'
import { WORMHOLE } from 'constants/dots'

const getAnnotationCard = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    const cardObject = getAnnotationCardObject({
            songIndex,
            annotationIndex,
            cardIndex
        }),

        {
            description: text,
            dotKeys = {},
            wormholeLinks
        } = cardObject,

        isTextCard = Boolean(text),
        isWormholeCard = Boolean(wormholeLinks)

    return {
        text,
        dotKeys: {
            ...dotKeys,

            // Add wormhole key to dot keys.
            ...isWormholeCard && { [WORMHOLE]: true }
        },
        isTextCard,
        isWormholeCard
    }
}

export {
    getAnnotationCard
}
