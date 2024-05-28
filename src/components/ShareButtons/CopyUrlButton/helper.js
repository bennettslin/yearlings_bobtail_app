import { PROMO_PAGE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

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
