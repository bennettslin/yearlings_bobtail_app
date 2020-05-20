// Actions for audio values.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { LOAD_STORE } from '../../constants/store'

export const updateLoadStore = (payload) => ({
    type: LOAD_STORE,
    payload: getDefinedOnlyPayload(payload)
})
