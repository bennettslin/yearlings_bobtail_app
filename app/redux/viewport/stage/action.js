import { getDefinedOnlyPayload } from '../../../helpers/action'
import { STAGE_STORE } from '../../../constants/store'

export const updateStageStore = (payload) => ({
    type: STAGE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
