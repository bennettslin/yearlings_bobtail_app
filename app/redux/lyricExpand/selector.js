import { createSelector } from 'reselect'
import { getIsLyricExpandable } from '../../helpers/resize/responsive'
import { mapIsLyricExpanded } from '../toggle/selector'
import {
    mapDeviceWidthIndex,
    mapIsHeightlessLyric
} from '../viewport/selector'

export const mapIsLyricExpandable = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsLyricExpandable(deviceWidthIndex)
)

export const getMapIsExpandToggleShown = inMain => createSelector(
    mapIsLyricExpandable,
    mapIsHeightlessLyric,
    mapIsLyricExpanded,
    (
        isLyricExpandable,
        isHeightlessLyric,
        isLyricExpanded
    ) => (
        isLyricExpandable &&

        // Render button in main if lyric column is heightless.
        Boolean(inMain) === (isHeightlessLyric && !isLyricExpanded)
    )
)
