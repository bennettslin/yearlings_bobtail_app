import homepage from './homepage'
import onesheet from './onesheet'
import artup from './artup'
import artup2 from './artup2'
import { getTitleForPromoPage } from './helpers/title'
import {
    ARTUP_2_SUBPATH,
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    PROMO_PATH,
} from '../../../app/constants/routing'
import { RUNTIME } from '../../../app/constants/server'

export default {
    _build: RUNTIME,
    titles: {
        homepage: getTitleForPromoPage(PROMO_PATH),
        onesheet: getTitleForPromoPage(ONESHEET_SUBPATH),
        artup: getTitleForPromoPage(ARTUP_SUBPATH),
        artup2: getTitleForPromoPage(ARTUP_2_SUBPATH),
    },
    homepage,
    onesheet,
    artup,
    artup2,
}
