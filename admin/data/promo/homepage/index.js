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
                    `": Find out why the Bobtail Yearlings are a terrible indie band!`,
                ],
            ],
        },
    ]),
})
