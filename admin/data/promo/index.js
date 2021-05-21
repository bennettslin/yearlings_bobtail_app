import homepage from './homepage'
import onesheet from './onesheet'
import artup from './artup'
import { getSmartQuotedEntity } from '../../utils/format/smartQuote'
import { RUNTIME } from '../../../app/constants/server'

export default {
    _build: RUNTIME,
    titles: {
        homepage: getSmartQuotedEntity(`Promo Homepage`),
        onesheet: getSmartQuotedEntity(`Onesheet`),
        artup: getSmartQuotedEntity(`"Artup" Presentation`),
    },
    homepage,
    onesheet,
    artup,
}
