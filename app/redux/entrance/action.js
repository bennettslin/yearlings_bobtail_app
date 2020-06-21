import { ENTRANCE_STORE } from '../../constants/store'

export const updateIsWindowResizeDone = (isWindowResizeDone = false) => ({
    type: ENTRANCE_STORE,
    payload: { isWindowResizeDone }
})

export const updateIsSongChangeDone = (isSongChangeDone = false) => ({
    type: ENTRANCE_STORE,
    payload: { isSongChangeDone }
})
