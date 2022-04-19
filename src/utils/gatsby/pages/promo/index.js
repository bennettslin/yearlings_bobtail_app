import promo from '../../../../../admin/data/promo'
import {
    ONESHEET_SUBPATH,
    PITCH_KEYS,
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
    ...PITCH_KEYS.map(pitchKey => [
        {
            path: `${PROMO_PATH}/${pitchKey}`,
            context: { pagePromoKey: pitchKey },
        },
        ...promo[pitchKey].slides.map(({ path }, index) => ({
            path: `${PROMO_PATH}/${pitchKey}/${index + 1}-${path}`,
            context: {
                pagePitchIndex: index + 1,
                pagePromoKey: pitchKey,
            },
        })),
    ]).flat(),
]
