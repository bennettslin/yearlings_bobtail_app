import { createSelector } from 'reselect'
import {
    getIsPhoneWidth,
    getIsTabletWidth,
    getIsDesktopWidth
} from '../../helpers/responsive'
import { mapDeviceWidthIndex } from '../viewport/selector'

export const mapIsPhoneWidth = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsPhoneWidth(deviceWidthIndex)
)

export const mapIsTabletWidth = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsTabletWidth(deviceWidthIndex)
)

export const mapIsDesktopWidth = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsDesktopWidth(deviceWidthIndex)
)

export const mapIsPhoneOrMiniWidth = createSelector(
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        isTabletWidth,
        isDesktopWidth
    ) => (
        !isDesktopWidth && !isTabletWidth
    )
)