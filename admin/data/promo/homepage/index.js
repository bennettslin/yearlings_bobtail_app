import { getFormattedSlideMetadata } from '../helpers/slide'
import { CONTACT_TEXT } from '../../../../src/constants/contact'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PARETO_SUBPATH,
} from '../../../../src/constants/routing'

export default getFormattedSlideMetadata({
    body: ([
        {
            title: 'Press material',
        },
        {
            entry: {
                promoKey: ONESHEET_SUBPATH,
            },
        },
        {
            title: 'Pitch presentations',
        },
        {
            entry: {
                promoKey: ARTUP_SUBPATH,
            },
        },
        {
            entry: {
                promoKey: PARETO_SUBPATH,
            },
        },
        {
            title: 'Contact us',
        },
        {
            paragraph: CONTACT_TEXT,
        },
    ]),
})
