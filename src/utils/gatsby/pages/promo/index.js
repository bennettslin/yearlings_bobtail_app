import promo from '../../../../../admin/data/promo'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PROMO_PATH,
} from '../../../../constants/routing'

export default [
    {
        path: PROMO_PATH,
    },
    {
        path: `${PROMO_PATH}/${ONESHEET_SUBPATH}`,
        context: { pagePromoKey: ONESHEET_SUBPATH },
    },
    {
        path: `${PROMO_PATH}/${ARTUP_SUBPATH}`,
        context: { pagePromoKey: ARTUP_SUBPATH },
    },

    ...promo.artup.slides.map(({ path }, index) => ({
        path: `${PROMO_PATH}/${ARTUP_SUBPATH}/${index + 1}-${path}`,
        context: {
            pageArtupIndex: index + 1,
            pagePromoKey: ARTUP_SUBPATH,
        },
    })),
]