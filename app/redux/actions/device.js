// Actions for window size.

import { is } from './actionsHelper'

import { DEVICE_STORE } from '../../constants/state'
import { DEVICE_DEFAULTS } from '../defaultConstants'

export const updateDeviceStore = ({
    deviceIndex,
    windowHeight,
    windowWidth,
    stageCoordinates

} = DEVICE_DEFAULTS) => ({

    type: DEVICE_STORE,
    payload: {
        ...is(deviceIndex) && { deviceIndex },
        ...is(windowHeight) && { windowHeight },
        ...is(windowWidth) && { windowWidth },
        ...is(stageCoordinates) && { stageCoordinates }
    }
})
