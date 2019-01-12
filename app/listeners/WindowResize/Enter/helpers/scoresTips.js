import {
    getIsTabletWidth,
    getIsMonitorWidth
} from '../../../../helpers/responsive'

import { DEVICE_WIDTH_CONFIGS } from '../../../../constants/responsive'

const _getIsScoresTipsInMainForDeviceObject = (
    windowWidth,
    deviceObject
) => {
    const { isScoresTipsInMainBreakpoint } = deviceObject
    return windowWidth < isScoresTipsInMainBreakpoint
}

export const getIsScoresTipsInMain = ({
    deviceWidthIndex,
    windowWidth
}) => {
    const deviceObject = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]

    if (getIsMonitorWidth(deviceWidthIndex) || getIsTabletWidth(deviceWidthIndex)) {
        return _getIsScoresTipsInMainForDeviceObject(windowWidth, deviceObject)
    } else {
        return true
    }
}
