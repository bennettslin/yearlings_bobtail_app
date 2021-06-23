import { getTitleForAlbum } from '../../../api/album/title'
import { getTitleForPromo } from '../../../api/promo'
import { getPromoUrl, getUrl } from '../../../helpers/url'

export const getMetaTitle = promoKey => (
    `${getTitleForPromo(promoKey)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = () => (
    `Promo material for the Bobtail Yearlings album Yearling's Bobtail.`
)

const getFacebookConfig = promoKey => ({
    'og:url': getPromoUrl(promoKey),
    'og:type': 'website',
    'og:title': getMetaTitle(promoKey),
    'og:description': getMetaDescription(promoKey),
    'og:image': getUrl(`test.jpg`),
})

const getTwitterConfig = promoKey => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(promoKey),
    'twitter:description': getMetaDescription(promoKey),
    'twitter:image': getUrl(`test.jpg`),
})

export const getMetaTags = promoKey => {
    const config = {
        ...getFacebookConfig(promoKey),
        ...getTwitterConfig(promoKey),
    }

    return Object.keys(config).map(metaTagKey => ({
        name: metaTagKey,
        content: config[metaTagKey],
    }))
}
