import { PROMO_PAGE_SOCIAL_MEDIA } from '../../constants/socialMedia'
import { getPromoUrl, getSongUrl } from '../../helpers/url'

export const copyUrlToClipboard = ({
    urlKey,
    songIndex,
    annotationIndex,
    promoKey,
    pitchIndex,

}) => {
    const url = urlKey === PROMO_PAGE_SOCIAL_MEDIA ?
        getPromoUrl(promoKey, pitchIndex) :
        getSongUrl({
            songIndex,
            annotationIndex,
        })

    navigator.clipboard.writeText(url)
}
