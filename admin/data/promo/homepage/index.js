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
                    `: Artist biography, project overview, and a Pulitzer promise for the record label that signs us!`,
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
                    `": What if indie artists are more like stores, while other artists are more like startups?`,
                ],
            ],
        },
    ]),
})
