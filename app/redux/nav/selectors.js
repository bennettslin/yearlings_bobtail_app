import { createSelector } from 'reselect'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from '../../helpers/resize/nav'
import { mapShownNavBookIndex } from '../session/selectors'
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

export const getMapIsNavColumnShown = bookIndex => createSelector(
    mapShowSingleNavBook,
    mapShownNavBookIndex,
    (
        showSingleNavBook,
        shownNavBookIndex
    ) => (
        !showSingleNavBook ||
        shownNavBookIndex === bookIndex
    )
)
