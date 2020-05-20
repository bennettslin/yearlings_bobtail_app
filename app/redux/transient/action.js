// Actions for transient states.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { TRANSIENT_STORE } from '../../constants/store'

export const updateTransientStore = (payload) => ({
    type: TRANSIENT_STORE,
    payload: getDefinedOnlyPayload(payload)
})
