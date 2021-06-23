import encodeUrl from 'encodeurl'
import { getPromoUrl, getSongUrl } from '../../helpers/url'
import { SOCIAL_FACEBOOK_BUTTON_KEY, SOCIAL_TWITTER_BUTTON_KEY } from '../../constants/buttons'

const
    SOCIAL_MEDIA_URL_MAP = {
        [SOCIAL_FACEBOOK_BUTTON_KEY]:
        `https://www.facebook.com/sharer/sharer.php?u=`,
        [SOCIAL_TWITTER_BUTTON_KEY]:
        `https://twitter.com/intent/tweet?url=`,
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
    identifier,
    songIndex,
    promoKey,
    isPromoPage,
    isShort,
}) => {
    const
        encodedUrl = encodeUrl(
            isPromoPage ?
                getPromoUrl(promoKey) :
                getSongUrl({
                    songIndex,
                    isShort,
                }),
        ),
        socialMediaUrl = `${SOCIAL_MEDIA_URL_MAP[identifier]}${encodedUrl}`

    window.open(
        socialMediaUrl,
        'yearlingsBobtail_socialMedia',
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
