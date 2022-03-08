import { getFormattedSlideMetadata } from '../helpers/slide'
import { CONTACT_TEXT } from '../../../../src/constants/contact'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    // PARETO_SUBPATH,
} from '../../../../src/constants/routing'

export default getFormattedSlideMetadata({
    body: [
        {
            title: 'Press material',
            promoKeys: [
                ONESHEET_SUBPATH,
            ],
        },
        {
            title: 'Pitch presentations',
            promoKeys: [
                // PARETO_SUBPATH,
                ARTUP_SUBPATH,
            ],
        },
        {
            title: 'Contact us',
            paragraph: CONTACT_TEXT,
        },
    ],
})
