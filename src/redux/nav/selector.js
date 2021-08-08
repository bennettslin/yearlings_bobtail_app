import { createSelector } from 'reselect'
import { getBeforeOnOrAfter } from '../../helpers/cursor'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook,
} from '../../helpers/resize/nav'
import { mapAccessedNavIndex } from '../access/selector'
import { mapSelectedSongIndex } from '../selected/selector'
import { mapShownNavBookIndex } from '../session/selector'
import {
    mapDeviceWidthIndex,
    mapWindowWidth,
} from '../viewport/selector'

export const mapShowShrunkNavIcon = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth,
    ) => getShowShrunkNavIcon({
        deviceWidthIndex,
        windowWidth,
    }),
)

export const mapShowSingleNavBook = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth,
    ) => getShowSingleNavBook({
        deviceWidthIndex,
        windowWidth,
    }),
)

export const getMapIsNavColumnShown = bookIndex => createSelector(
    mapShowSingleNavBook,
    mapShownNavBookIndex,
    (
        showSingleNavBook,
        shownNavBookIndex,
    ) => (
        !showSingleNavBook ||
        shownNavBookIndex === bookIndex
    ),
)

export const getMapNavStatus = songIndex => createSelector(
    mapAccessedNavIndex,
    mapSelectedSongIndex,
    (
        accessedNavIndex,
        selectedSongIndex,
    ) => (
        getBeforeOnOrAfter(
            accessedNavIndex > -1 ? accessedNavIndex : selectedSongIndex,
            songIndex,
        )
    ),
)
