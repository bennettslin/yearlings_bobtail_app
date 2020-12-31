// Actions for focus values.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { FOCUS_STORE } from '../../constants/store'

export const updateFocusStore = payload => ({
    type: FOCUS_STORE,
    payload: getDefinedOnlyPayload(payload),
})
