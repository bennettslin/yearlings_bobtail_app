import { getTitleForAlbum } from '../../../api/album/title'
import { getDescriptionForPromo, getTitleForPromo } from '../../../api/promo'
import { getTruncatedStringText } from '../../../helpers/format'
import { spreadHelmetConfig } from '../../../helpers/helmet'
import { getPromoUrl, getUrl } from '../../../helpers/url'

export const getMetaTitle = promoKey => (
    `${getTitleForPromo(promoKey)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = promoKey => (
    getTruncatedStringText(getDescriptionForPromo(promoKey))
)

const getDefaultConfig = promoKey => ({
    'description': getMetaDescription(promoKey),
})

const getFacebookConfig = promoKey => ({
    'og:url': `${getPromoUrl(promoKey)}/`,
    'og:type': 'website',
    'og:title': getMetaTitle(promoKey),
    'og:description': getMetaDescription(promoKey),
    'og:image': getUrl(`share/image/facebook_image/promo.jpg`),
})

const getTwitterConfig = promoKey => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(promoKey),
    'twitter:description': getMetaDescription(promoKey),
    'twitter:image': getUrl(`share/image/twitter_thumbnail/promo.jpg`),
})

export const getMetaTags = songIndex => ([
    ...spreadHelmetConfig({
        config: {
            ...getDefaultConfig(songIndex),
            ...getTwitterConfig(songIndex),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig(songIndex),
        nameKey: 'property',
    }),
])
