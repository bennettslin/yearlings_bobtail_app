import { getDefinedOnlyPayload } from '../../helpers/action'
import { ENTRANCE_STORE } from '../../constants/store'

export const updateEntranceStore = payload => ({
    type: ENTRANCE_STORE,
    payload: getDefinedOnlyPayload(payload)
})

export const updateIsWindowResizeDone = (isWindowResizeDone = false) => ({
    type: ENTRANCE_STORE,
    payload: { isWindowResizeDone }
})
