import {
    getDescriptionForPromo,
    getTitleForPromo,
} from '../../../../endpoint/promo'

export const getEntryRichText = ({ promoKey }) => ([
    [
        {
            anchor: getTitleForPromo(promoKey),
            promoKey,
        },
        `: ${getDescriptionForPromo(promoKey)}`,
    ],
])
