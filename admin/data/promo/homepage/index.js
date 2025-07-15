import { getFormattedSlideMetadata } from '../helpers/slide'
import { CONTACT_TEXT } from '../../../../src/constants/contact'
import {
    ONESHEET_SUBPATH,
    // PITCH_KEYS,
} from '../../../../src/constants/routing'

export default getFormattedSlideMetadata({
    body: [
        {
            title: 'Press material',
            promoKeys: [
                ONESHEET_SUBPATH,
            ],
        },
        // {
        //     title: 'Pitch presentations',
        //     promoKeys: PITCH_KEYS,
        // },
        {
            title: 'Contact us',
            paragraph: CONTACT_TEXT,
        },
    ],
})
