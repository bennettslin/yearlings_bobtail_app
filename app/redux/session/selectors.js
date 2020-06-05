import { createSelector } from 'reselect'
import { getWikiUrl } from '../../helpers/wiki'
import { mapIsMobileWiki } from '../responsive/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../selected/selectors'

export const mapShownNavBookIndex = (
    { sessionStore: { shownNavBookIndex } }
) => shownNavBookIndex

export const mapAudioOptionIndex = (
    { sessionStore: { audioOptionIndex } }
) => audioOptionIndex

const mapSelectedWikiIndex = (
    { sessionStore: { selectedWikiIndex } }
) => selectedWikiIndex

export const mapIsWikiShown = createSelector(
    mapSelectedWikiIndex,
    selectedWikiIndex => Boolean(selectedWikiIndex)
)

const mapCarouselAnnotationIndex = (
    { sessionStore: { carouselAnnotationIndex } }
) => carouselAnnotationIndex

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

