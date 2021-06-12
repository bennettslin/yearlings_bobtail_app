import { getFormattedSlideMetadata } from '../helpers/slide'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../../../app/constants/routing'

export default getFormattedSlideMetadata({
    body: ([
        {
            title: 'Press material',
        },
        {
            list: [
                [
                    {
                        anchor: 'Onesheet',
                        promoKey: ONESHEET_SUBPATH,
                    },
                    `: Artist biography, project overview, and a promise to win a Pulitzer for the record label that signs us!`,
                ],
            ],
        },
        {
            title: 'Presentations',
        },
        {
            list: [
                [
                    `"`,
                    {
                        anchor: 'Invest in Artups',
                        promoKey: ARTUP_SUBPATH,
                    },
                    `": What if some artists are more like stores, while others are more like startups?`,
                ],
            ],
        },
    ]),
})
