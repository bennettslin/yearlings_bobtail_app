// Actions for banner state.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { BANNER_STORE } from '../../constants/store'
import { BANNER_DEFAULTS } from './default'

export const updateBannerStore = (payload = BANNER_DEFAULTS) => ({
    type: BANNER_STORE,
    payload: getDefinedOnlyPayload(payload, BANNER_STORE),
})
