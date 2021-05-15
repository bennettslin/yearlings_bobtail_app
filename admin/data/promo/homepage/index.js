import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../../../app/constants/routing'

export default ({
    title: 'Promo Homepage',
    body: ([
        {
            title: 'Onesheet',
        },
        {
            text: [
                'Blah',
                {
                    anchor: 'Onesheet',
                    promoKey: ONESHEET_SUBPATH,
                },
                'blah',
            ],
        },
        {
            title: 'Artup',
        },
        {
            text: [
                'Blah',
                {
                    anchor: 'Artup',
                    promoKey: ARTUP_SUBPATH,
                },
                'blah',
            ],
        },
    ]),
})
