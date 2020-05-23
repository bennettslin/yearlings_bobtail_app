// Actions for state based on window size.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { RESPONSIVE_STORE } from '../../constants/store'

export const updateResponsiveStore = payload => ({
    type: RESPONSIVE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
