import { getFormattedSlideMetadata } from '../helpers/slide'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PARETO_SUBPATH,
    PROMO_PATH,
    ROSALIND_SUBPATH,
} from '../../../../src/constants/routing'

export default {
    [PROMO_PATH]: {
        title: `Promo Homepage`,
        description: `Promo content for the Bobtail Yearlings album Yearling's Bobtail.`,
    },
    [ONESHEET_SUBPATH]: getFormattedSlideMetadata({
        title: [
            `The`,
            {
                isItalic: true,
                lyric: `Ulysses`,
            },
            `of Rock Albums`,
        ],
        plainTitle: `The Ulysses of Rock Albums`,
        description: `Artist and project onesheet.`,
    }),
    [ROSALIND_SUBPATH]: {
        title: 'Rosalind Franklin Album',
        description: `Page for album content`,
    },
    [ARTUP_SUBPATH]: {
        title: `Invest in Artups`,
        description: `Some artists are like stores, while others are like startups.`,
    },
    [PARETO_SUBPATH]: {
        title: `Our Pareto Package Deal`,
        description: `What your label gets by signing the Bobtail Yearlings.`,
    },
}
