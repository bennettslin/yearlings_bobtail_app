import { getPromoUrl, getSongUrl } from '../../helpers/url'

export const copyUrlToClipboard = ({
    isPromoShown,
    promoKey,
    pitchIndex,
    songIndex,
    annotationIndex,

}) => {
    navigator.clipboard.writeText(
        isPromoShown ?
            getPromoUrl(promoKey, pitchIndex) :
            getSongUrl({
                songIndex,
                annotationIndex,
            }),
    )
}
