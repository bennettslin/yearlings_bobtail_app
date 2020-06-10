import { getStageDimensionCoordinates } from '../../helpers/resize/stage'
import {
    INITIAL_WINDOW_WIDTH,
    INITIAL_WINDOW_HEIGHT,
    INITIAL_DEVICE_WIDTH_INDEX
} from '../viewport/default'
import {
    IS_INITIAL_HEIGHTLESS_LYRIC,
    IS_INITIAL_TWO_ROW_MENU,
    INITIAL_MENU_HEIGHT
} from '../responsive/default'
import { CAN_INITIAL_CAROUSEL_MOUNT } from '../mount/default'

export const INITIAL_STAGE_DIMENSION_COORDINATES =
    getStageDimensionCoordinates({
        deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
        windowWidth: INITIAL_WINDOW_WIDTH,
        windowHeight: INITIAL_WINDOW_HEIGHT,
        isHeightlessLyric: IS_INITIAL_HEIGHTLESS_LYRIC,
        isTwoRowMenu: IS_INITIAL_TWO_ROW_MENU,
        menuHeight: INITIAL_MENU_HEIGHT,
        canCarouselMount: CAN_INITIAL_CAROUSEL_MOUNT
    })

export const STAGE_DEFAULTS = {
    stageDimensionCoordinates: INITIAL_STAGE_DIMENSION_COORDINATES
}
