import promo from '../../../../../admin/data/promo'
import {
    ONESHEET_SUBPATH,
    ROSALIND_SUBPATH,
    PITCH_KEYS,
    PROMO_PATH,
    AMNESTICISM_SUBPATH,
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
        path: `${PROMO_PATH}/${AMNESTICISM_SUBPATH}`,
        context: { pagePromoKey: AMNESTICISM_SUBPATH },
    },
    {
        path: `${PROMO_PATH}/${ROSALIND_SUBPATH}`,
        context: { pagePromoKey: ROSALIND_SUBPATH },
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
