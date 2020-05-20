// Actions for banner state.
import { getDefinedOnlyPayload } from '../actionHelper'

import { BANNER_STORE } from '../../constants/store/keys'
import { BANNER_DEFAULTS } from '../defaultStates'

export const updateBannerStore = (payload = BANNER_DEFAULTS) => ({
    type: BANNER_STORE,
    payload: getDefinedOnlyPayload(payload)
})
