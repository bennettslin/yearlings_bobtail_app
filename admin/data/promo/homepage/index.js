import { getFormattedSlideMetadata } from '../helpers/slide'
import { CONTACT_TEXT } from '../../../../app/constants/contact'
import {
    ARTUP_SUBPATH,
    // ARTUP_2_SUBPATH,
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
                    `: Artist biography and project overview. Plus, a Pulitzer promise for the record label that signs us!`,
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
                    `": What if indie artists are like stores, while other artists are like startups?`,
                ],
            ],
        },
        // {
        //     list: [
        //         [
        //             `"`,
        //             {
        //                 anchor: 'Invest in Artups 2',
        //                 promoKey: ARTUP_2_SUBPATH,
        //             },
        //             `": What if indie artists are more like stores, while other artists are more like startups?`,
        //         ],
        //     ],
        // },
        {
            title: 'Contact us',
        },
        {
            paragraph: CONTACT_TEXT,
        },
    ]),
})
