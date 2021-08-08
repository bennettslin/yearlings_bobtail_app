import { getFormattedSlideMetadata } from '../helpers/slide'
import { CONTACT_TEXT } from '../../../../src/constants/contact'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
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
            title: 'Presentations',
        },
        {
            entry: {
                promoKey: ARTUP_SUBPATH,
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
