import { createSelector } from 'reselect'
import { getIsMobileWiki } from '../../helpers/resize/wiki'
import {
    mapDeviceWidthIndex,
    mapWindowWidth
} from '../viewport/selectors'

export const mapIsMobileWiki = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getIsMobileWiki({
        deviceWidthIndex,
        windowWidth
    })
)
