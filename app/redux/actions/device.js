// Actions for window size.

import {
    DEVICE_STORE,
    DEVICE_INDEX,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    STAGE_COORDINATES,
    STAGE_COORDINATES_DEFAULT
} from '../../constants/state'

export const updateDeviceStore = ({

    deviceIndex = 0,
    windowHeight = 0,
    windowWidth = 0,
    stageCoordinates = STAGE_COORDINATES_DEFAULT

} = {}) => ({
    type: DEVICE_STORE,
    payload: {
        [DEVICE_INDEX]: deviceIndex,
        [WINDOW_HEIGHT]: windowHeight,
        [WINDOW_WIDTH]: windowWidth,
        [STAGE_COORDINATES]: stageCoordinates
    }
})
