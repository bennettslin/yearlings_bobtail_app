import { getFormattedSlideMetadata } from '../helpers/slide'
import {
    AMNESTICISM_SUBPATH,
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PARETO_SUBPATH,
    PROMO_PATH,
    ROSALIND_SUBPATH,
} from '../../../../src/constants/routing'

export default {
    // Homepage.
    [PROMO_PATH]: {
        title: `Promo Homepage`,
        description: `Promo content for the Bobtail Yearlings album Yearling's Bobtail.`,
    },

    // Single pages.
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

    // Pitch pages.
    [ARTUP_SUBPATH]: {
        title: `Invest in Artups`,
        description: `Some artists are like stores, while others are like startups.`,
    },
    [PARETO_SUBPATH]: {
        title: `Our Pareto Package Deal`,
        description: `What your label gets by signing the Bobtail Yearlings.`,
    },

    // Download pages.
    [AMNESTICISM_SUBPATH]: {
        title: 'Amnesticism Content',
        description: `Page for amnesticism content.`,
    },
    [ROSALIND_SUBPATH]: {
        title: 'Rosalind Franklin Album Content',
        description: `Page for Rosalind Franklin album content.`,
    },
}
