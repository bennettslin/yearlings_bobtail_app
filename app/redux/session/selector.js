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

export const mapWikiAnnotationIndex = (
    { [SESSION_STORE]: { wikiAnnotationIndex } }
) => wikiAnnotationIndex

export const mapEarColumnIndex = (
    { [SESSION_STORE]: { earColumnIndex } }
) => earColumnIndex
