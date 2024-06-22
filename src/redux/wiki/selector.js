import { createSelector } from 'reselect'
import { getIsMobileWiki } from '../../helpers/resize/wiki'
import { getWikiUrl } from '../../helpers/wiki'
import {
    mapDeviceWidthIndex,
    mapWindowWidth,
} from '../viewport/selector'
import {
    mapSelectedSongIndex,
    mapWikiAnnotationIndex,
    mapSelectedWikiIndex,
} from '../selected/selector'

export const mapIsWikiShown = createSelector(
    mapSelectedWikiIndex,
    selectedWikiIndex => Boolean(selectedWikiIndex),
)

const mapIsMobileWiki = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth,
    ) => getIsMobileWiki({
        deviceWidthIndex,
        windowWidth,
    }),
)

export const mapSelectedWikiUrl = createSelector(
    mapSelectedSongIndex,
    mapWikiAnnotationIndex,
    mapSelectedWikiIndex,
    mapIsMobileWiki,
    (
        selectedSongIndex,
        wikiAnnotationIndex,
        selectedWikiIndex,
        isMobileWiki,
    ) => getWikiUrl({
        songIndex: selectedSongIndex,
        annotationIndex: wikiAnnotationIndex,
        wikiIndex: selectedWikiIndex,
        isMobileWiki,
    }),
)
