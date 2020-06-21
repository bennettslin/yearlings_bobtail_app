import { ENTRANCE_STORE } from '../../constants/store'

export const mapIsWindowResizeDone = (
    { [ENTRANCE_STORE]: { isWindowResizeDone } }
) => isWindowResizeDone

export const mapIsSongChangeDone = (
    { [ENTRANCE_STORE]: { isSongChangeDone } }
) => isSongChangeDone
