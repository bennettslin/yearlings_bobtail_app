import { createSelector } from 'reselect'
import { getWikiUrl } from '../../helpers/wiki'
import { mapShowSingleNavBook } from '../nav/selectors'
import { mapIsMobileWiki } from '../responsive/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../selected/selectors'
import { SESSION_STORE } from '../../constants/store'

export const mapShownNavBookIndex = (
    { [SESSION_STORE]: { shownNavBookIndex } }
) => shownNavBookIndex

export const mapAudioOptionIndex = (
    { [SESSION_STORE]: { audioOptionIndex } }
) => audioOptionIndex

const mapSelectedWikiIndex = (
    { [SESSION_STORE]: { selectedWikiIndex } }
) => selectedWikiIndex

export const mapIsWikiShown = createSelector(
    mapSelectedWikiIndex,
    selectedWikiIndex => Boolean(selectedWikiIndex)
)

const mapCarouselAnnotationIndex = (
    { [SESSION_STORE]: { carouselAnnotationIndex } }
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
