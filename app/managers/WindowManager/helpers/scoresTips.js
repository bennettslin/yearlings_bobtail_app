import {
    getIsTablet,
    getIsMonitor
} from '../../../helpers/responsiveHelper'

import { DEVICE_OBJECTS } from '../../../constants/responsive'

const _getIsScoresTipsInMainForDeviceObject = (
    windowWidth,
    deviceObject
) => {
    const { isScoresTipsInMainBreakpoint } = deviceObject
    return windowWidth < isScoresTipsInMainBreakpoint
}

const getIsScoresTipsInMain = ({
    deviceIndex,
    windowWidth
}) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (getIsMonitor(deviceIndex) || getIsTablet(deviceIndex)) {
        return _getIsScoresTipsInMainForDeviceObject(windowWidth, deviceObject)
    } else {
        return true
    }
}

export {
    getIsScoresTipsInMain
}
