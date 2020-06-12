import { SESSION_STORE } from '../../constants/store'

export const mapShownNavBookIndex = (
    { [SESSION_STORE]: { shownNavBookIndex } }
) => shownNavBookIndex

export const mapAudioOptionIndex = (
    { [SESSION_STORE]: { audioOptionIndex } }
) => audioOptionIndex

export const mapSelectedWikiIndex = (
    { [SESSION_STORE]: { selectedWikiIndex } }
) => selectedWikiIndex

export const mapCarouselAnnotationIndex = (
    { [SESSION_STORE]: { carouselAnnotationIndex } }
) => carouselAnnotationIndex
