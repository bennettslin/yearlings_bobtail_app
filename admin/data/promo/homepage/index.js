import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
} from '../../../../app/constants/routing'

export default ({
    body: ([
        {
            title: 'Press material',
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
            title: 'Presentations',
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
