import encodeUrl from 'encodeurl'
import { getPromoUrl, getSongUrl } from '../../helpers/url'
import { PROMO_PAGE_SOCIAL_MEDIA } from '../../constants/socialMedia'
import { APP_NAME } from '../../utils/server'

const
    SOCIAL_MEDIA_URL_MAP = {
    },
    POPUP_HEIGHT = 456,
    POPUP_WIDTH = 568,
    BASE_WINDOW_FEATURES = {
        height: POPUP_HEIGHT,
        width: POPUP_WIDTH,
        scrollbars: 'yes',
    }

const getWindowFeatures = features => (
    Object.keys(features).map(key => (
        `${key}=${features[key]}`
    )).join(',')
)

export const openSocialMediaPopup = ({
    socialMediaId,
    brandId,
    songIndex,
    promoKey,
    pitchIndex,
    isShort,
}) => {
    const
        url = socialMediaId === PROMO_PAGE_SOCIAL_MEDIA ?
            getPromoUrl(promoKey, pitchIndex) :
            getSongUrl({
                songIndex,
                isShort,
            }),
        // Include final forward slash because Twitter warns about redirects.
        encodedUrl = encodeUrl(`${url}/`),
        socialMediaUrl = `${SOCIAL_MEDIA_URL_MAP[brandId]}${encodedUrl}`

    window.open(
        socialMediaUrl,
        `${APP_NAME}_socialMedia`,
        getWindowFeatures({
            ...BASE_WINDOW_FEATURES,

            // Centre the window popup.
            top:
                window.top.outerHeight / 2
                + window.top.screenY
                - POPUP_HEIGHT / 2,
            left:
                window.top.outerWidth / 2
                + window.top.screenX
                - POPUP_WIDTH / 2,
        }),
    )
}
