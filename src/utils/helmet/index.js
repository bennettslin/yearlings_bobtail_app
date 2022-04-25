import { getAlbumMetaTags, getAlbumMetaTitle } from './album'
import { getPromoMetaTags, getPromoMetaTitle } from './promo'

export const getMetaTitle = ({
    doShowPromo = true,
    songIndex,
    promoKey,
    pitchIndex,
}) => (
    doShowPromo ?
        getPromoMetaTitle(promoKey, pitchIndex) :
        getAlbumMetaTitle(songIndex)
)

export const getMetaTags = ({
    doShowPromo = true,
    songIndex,
    promoKey,
    pitchIndex,
}) => (
    doShowPromo ?
        getPromoMetaTags(promoKey, pitchIndex) :
        getAlbumMetaTags(songIndex)
)
