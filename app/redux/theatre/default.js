import { getCeilingFloorHeight } from '../../helpers/resize/theatre'
import {
    INITIAL_DEVICE_WIDTH_INDEX,
    INITIAL_WINDOW_HEIGHT
} from '../viewport/default'
import {
    INITIAL_PROSCENIUM_TOP,
    INITIAL_PROSCENIUM_HEIGHT
} from '../proscenium/default'
import {
    IS_INITIAL_HEIGHTLESS_LYRIC,
    IS_INITIAL_TWO_ROW_MENU,
    INITIAL_MENU_HEIGHT
} from '../responsive/default'

const {
    ceilingHeight,
    floorHeight

} = getCeilingFloorHeight({
    deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
    windowHeight: INITIAL_WINDOW_HEIGHT,
    isHeightlessLyric: IS_INITIAL_HEIGHTLESS_LYRIC,
    isTwoRowMenu: IS_INITIAL_TWO_ROW_MENU,
    menuHeight: INITIAL_MENU_HEIGHT,
    prosceniumTop: INITIAL_PROSCENIUM_TOP,
    prosceniumHeight: INITIAL_PROSCENIUM_HEIGHT
})

export const THEATRE_DEFAULTS = {
    ceilingHeight,
    floorHeight
}
