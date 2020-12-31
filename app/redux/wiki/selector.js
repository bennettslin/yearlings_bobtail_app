import { createSelector } from 'reselect'
import { getIsMobileWiki } from '../../helpers/resize/wiki'
import { getWikiUrl } from '../../helpers/wiki'
import {
    mapDeviceWidthIndex,
    mapWindowWidth,
} from '../viewport/selector'
import {
    mapSelectedWikiIndex,
    mapWikiAnnotationIndex,
} from '../session/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
} from '../selected/selector'

export const mapIsWikiShown = createSelector(
    mapSelectedWikiIndex,
    selectedWikiIndex => Boolean(selectedWikiIndex)
)

const mapIsMobileWiki = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getIsMobileWiki({
        deviceWidthIndex,
        windowWidth,
    })
)

export const mapSelectedWikiUrl = createSelector(
    mapSelectedWikiIndex,
    mapWikiAnnotationIndex,
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapIsMobileWiki,
    (
        selectedWikiIndex,
        wikiAnnotationIndex,
        selectedSongIndex,
        selectedAnnotationIndex,
        isMobileWiki
    ) => getWikiUrl({
        selectedWikiIndex,
        wikiAnnotationIndex,
        selectedSongIndex,
        selectedAnnotationIndex,
        isMobileWiki,
    })
)
