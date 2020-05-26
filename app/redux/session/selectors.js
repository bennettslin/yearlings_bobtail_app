import { createSelector } from 'reselect'
import { IS_MOBILE_WIKI_SELECTOR } from '../responsive/selectors'
import { getWikiUrl } from '../../helpers/wiki'

export const SELECTED_WIKI_URL_SELECTOR = createSelector(
    IS_MOBILE_WIKI_SELECTOR,
    ({
        selectedStore: {
            selectedAnnotationIndex,
            selectedSongIndex
        },
        sessionStore: {
            selectedWikiIndex,
            carouselAnnotationIndex
        }
    }) => ({
        selectedSongIndex,
        selectedWikiIndex,
        selectedAnnotationIndex,
        carouselAnnotationIndex
    }),
    (
        isMobileWiki,
        {
            selectedSongIndex,
            selectedWikiIndex,
            selectedAnnotationIndex,
            carouselAnnotationIndex
        }
    ) => getWikiUrl({
        selectedSongIndex,
        selectedWikiIndex,
        selectedAnnotationIndex,
        carouselAnnotationIndex,
        isMobileWiki
    })
)

export const AUDIO_OPTION_INDEX_SELECTOR =
    ({ sessionStore: { audioOptionIndex } }) => audioOptionIndex
