import { getTitleForAlbum } from '../../api/album/title'
import { getTitleForPromo } from '../../api/promo'

export const getHelmetTitleForPromoKey = promoKey => (
    `${getTitleForPromo(promoKey)} | ${getTitleForAlbum()}`
)
