// Actions for state based on window size.
import { getDefinedOnlyPayload } from '../actionHelper'

import { RESPONSIVE_STORE } from '../../constants/store/keys'
import { RESPONSIVE_DEFAULTS } from '../defaultStates'

export const updateResponsiveStore = (payload = RESPONSIVE_DEFAULTS) => ({
    type: RESPONSIVE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
