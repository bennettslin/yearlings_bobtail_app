import { PROMO_PAGE_SOCIAL_MEDIA } from '../../../constants/socialMedia'
import { getPromoUrl, getSongUrl } from '../../../helpers/url'

export const copyUrlToClipboard = ({
    socialMediaId,
    songIndex,
    annotationIndex,
    promoKey,
    pitchIndex,
}) => {
    const url = socialMediaId === PROMO_PAGE_SOCIAL_MEDIA ?
        getPromoUrl(promoKey, pitchIndex) :
        getSongUrl({
            songIndex,
            annotationIndex,
        })

    navigator.clipboard.writeText(url)
}

export const getCopyUrlButtonIdentifier = ({
    socialMediaId,
    songIndex,
    annotationIndex,
}) => {
    if (socialMediaId === PROMO_PAGE_SOCIAL_MEDIA) {
        return null
    } else if (isNaN(annotationIndex)) {
        return songIndex
    } else {
        return songIndex * 100 + annotationIndex
    }
}
