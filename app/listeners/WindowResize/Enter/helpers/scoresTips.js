import {
    getIsTabletWidth,
    getIsMonitorWidth
} from '../../../../helpers/responsive'

import { DEVICE_OBJECTS } from '../../../../constants/responsive'

const _getIsScoresTipsInMainForDeviceObject = (
    windowWidth,
    deviceObject
) => {
    const { isScoresTipsInMainBreakpoint } = deviceObject
    return windowWidth < isScoresTipsInMainBreakpoint
}

export const getIsScoresTipsInMain = ({
    deviceIndex,
    windowWidth
}) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (getIsMonitorWidth(deviceIndex) || getIsTabletWidth(deviceIndex)) {
        return _getIsScoresTipsInMainForDeviceObject(windowWidth, deviceObject)
    } else {
        return true
    }
}
