import { getDefinedOnlyPayload } from '../../helpers/action'
import { ENTRANCE_STORE } from '../../constants/store'
import { getSongChangeDefaults, getSceneChangeDefaults } from './default'

export const updateEntranceStore = payload => ({
    type: ENTRANCE_STORE,
    payload: getDefinedOnlyPayload(payload),
})

export const updateIsWindowResizeDone = (isWindowResizeDone = false) => ({
    type: ENTRANCE_STORE,
    payload: { isWindowResizeDone },
})

export const resetSongChange = () => ({
    type: ENTRANCE_STORE,
    payload: getSongChangeDefaults(false),
})

export const resetSceneChange = () => ({
    type: ENTRANCE_STORE,
    payload: getSceneChangeDefaults(false),
})
