import {
    getDescriptionForPromo,
    getTitleForPromo,
} from '../../../../api/promo'

export const getEntryRichText = ({ promoKey }) => ([
    [
        {
            anchor: getTitleForPromo(promoKey),
            promoKey,
        },
        `: ${getDescriptionForPromo(promoKey)}`,
    ],
])
