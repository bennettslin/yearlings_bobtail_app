import { getTitleForAlbum } from '../../../api/album/title'
import { getDescriptionForPromo, getTitleForPromo } from '../../../api/promo'
import { getPromoUrl, getUrl } from '../../../helpers/url'

export const getMetaTitle = promoKey => (
    `${getTitleForPromo(promoKey)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = promoKey => (
    getDescriptionForPromo(promoKey)
)

const getDefaultConfig = promoKey => ({
    'description': getMetaDescription(promoKey),
})

const getFacebookConfig = promoKey => ({
    'og:url': getPromoUrl(promoKey),
    'og:type': 'website',
    'og:title': getMetaTitle(promoKey),
    'og:description': getMetaDescription(promoKey),
    'og:image': getUrl(`image_socialMedia.jpg`),
})

const getTwitterConfig = promoKey => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(promoKey),
    'twitter:description': getMetaDescription(promoKey),
    'twitter:image': getUrl(`image_socialMedia.jpg`),
})

// TODO: This is duplicated.
const spreadConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = songIndex => ([
    ...spreadConfig({
        config: {
            ...getDefaultConfig(songIndex),
            ...getTwitterConfig(songIndex),
        },
        nameKey: 'name',
    }),
    ...spreadConfig({
        config: getFacebookConfig(songIndex),
        nameKey: 'property',
    }),
])
