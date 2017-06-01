// Actions for window size.
import { DEVICE_INDEX,
         WINDOW_HEIGHT,
         WINDOW_WIDTH } from '../../constants/state'

export const setDeviceIndex = (deviceIndex = 0) => (
    { type: DEVICE_INDEX,
      payload: deviceIndex }
)

export const setWindowHeight = (windowHeight = 0) => (
    { type: WINDOW_HEIGHT,
      payload: windowHeight }
)

export const setWindowWidth = (windowWidth = 0) => (
    { type: WINDOW_WIDTH,
      payload: windowWidth }
)
