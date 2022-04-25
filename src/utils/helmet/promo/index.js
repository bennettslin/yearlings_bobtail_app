import { PITCH_KEYS } from '../../../constants/routing'
import { TWITTER_ACCOUNT } from '../../../constants/socialMedia'
import { getTitleForAlbum } from '../../../endpoint/album/title'
import { getDescriptionForPromo, getTitleForPromo } from '../../../endpoint/promo'
import { getTitleForSlide } from '../../../endpoint/promo/pitches'
import { getTruncatedStringText } from '../../../helpers/format'
import { getPitchTitleAsText, spreadHelmetConfig } from '../../../helpers/helmet'
import { getPromoUrl, getUrl } from '../../../helpers/url'
import { APP_NAME } from '../../server'

export const getPromoMetaTitle = (promoKey, pitchIndex) => {
    const promoTitle = getTitleForPromo(promoKey, true)
    return (
        PITCH_KEYS.includes(promoKey) ?
            `${
                getPitchTitleAsText(getTitleForSlide(promoKey, pitchIndex))
            } | ${promoTitle}` :
            `${promoTitle} | ${getTitleForAlbum()}`
    )
}

const _getPromoMetaDescription = promoKey => (
    getTruncatedStringText(getDescriptionForPromo(promoKey))
)

const _getPromoDefaultConfig = promoKey => ({
    description: _getPromoMetaDescription(promoKey),
})

const _getPromoFacebookConfig = (promoKey, pitchIndex) => ({
    'og:url': `${getPromoUrl(promoKey)}/`,
    'og:type': 'website',
    'og:title': getPromoMetaTitle(promoKey, pitchIndex),
    'og:description': _getPromoMetaDescription(promoKey),
    'og:image': getUrl(`share/image/facebook/${APP_NAME}.jpg`),
})

const _getPromoTwitterConfig = (promoKey, pitchIndex) => ({
    'twitter:card': 'summary',
    'twitter:site': `@${TWITTER_ACCOUNT}`,
    'twitter:title': getPromoMetaTitle(promoKey, pitchIndex),
    'twitter:description': _getPromoMetaDescription(promoKey),
    'twitter:image': getUrl(`share/image/twitter/${APP_NAME}.jpg`),
})

export const getPromoMetaTags = (promoKey, pitchIndex) => ([
    ...spreadHelmetConfig({
        config: {
            ..._getPromoDefaultConfig(promoKey),
            ..._getPromoTwitterConfig(promoKey, pitchIndex),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: _getPromoFacebookConfig(promoKey, pitchIndex),
        nameKey: 'property',
    }),
])
