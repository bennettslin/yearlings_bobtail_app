import { ENTRANCE_STORE } from '../../constants/store'

export const mapIsWindowResizeDone = (
    { [ENTRANCE_STORE]: { isWindowResizeDone } }
) => isWindowResizeDone
