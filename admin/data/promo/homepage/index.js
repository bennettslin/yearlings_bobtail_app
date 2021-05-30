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
                    `: Artist biography and album overview.`,
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
                        anchor: 'Artup',
                        promoKey: ARTUP_SUBPATH,
                    },
                    `": Are some artists more like stores, while others are more like startups?`,
                ],
            ],
        },
    ]),
})
