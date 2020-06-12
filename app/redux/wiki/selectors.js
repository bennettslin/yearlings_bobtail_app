import { createSelector } from 'reselect'
import { getIsMobileWiki } from '../../helpers/resize/wiki'
import { getWikiUrl } from '../../helpers/wiki'
import {
    mapDeviceWidthIndex,
    mapWindowWidth
} from '../viewport/selectors'
import {
    mapSelectedWikiIndex,
    mapCarouselAnnotationIndex
} from '../session/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../selected/selectors'

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
        windowWidth
    })
)

export const mapSelectedWikiUrl = createSelector(
    mapSelectedWikiIndex,
    mapCarouselAnnotationIndex,
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex,
    mapIsMobileWiki,
    (
        selectedWikiIndex,
        carouselAnnotationIndex,
        selectedSongIndex,
        selectedAnnotationIndex,
        isMobileWiki
    ) => getWikiUrl({
        selectedWikiIndex,
        carouselAnnotationIndex,
        selectedSongIndex,
        selectedAnnotationIndex,
        isMobileWiki
    })
)
