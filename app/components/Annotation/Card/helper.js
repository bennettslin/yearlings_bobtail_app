import { getCardForAnnotation } from '../../../album/api/annotations'
import { WORMHOLE } from '../../../constants/dots'

export const getAnnotationCard = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    const cardObject = getCardForAnnotation(
            songIndex,
            annotationIndex,
            cardIndex
        ),

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
