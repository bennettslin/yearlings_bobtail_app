import { createSelector } from 'reselect'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from '../../helpers/resize/nav'
import {
    mapDeviceWidthIndex,
    mapWindowWidth
} from '../viewport/selectors'

export const mapShowShrunkNavIcon = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getShowShrunkNavIcon({
        deviceWidthIndex,
        windowWidth
    })
)

export const mapShowSingleNavBook = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getShowSingleNavBook({
        deviceWidthIndex,
        windowWidth
    })
)
