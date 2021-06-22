import { SESSION_STORE } from '../../constants/store'

export const mapShownNavBookIndex = (
    { [SESSION_STORE]: { shownNavBookIndex } },
) => shownNavBookIndex

export const mapIsSongRepeatOn = (
    { [SESSION_STORE]: { isSongRepeatOn } },
) => isSongRepeatOn

export const mapVolumeIndex = (
    { [SESSION_STORE]: { volumeIndex } },
) => volumeIndex

export const mapSelectedWikiIndex = (
    { [SESSION_STORE]: { selectedWikiIndex } },
) => selectedWikiIndex

export const mapWikiAnnotationIndex = (
    { [SESSION_STORE]: { wikiAnnotationIndex } },
) => wikiAnnotationIndex

export const mapEarColumnIndex = (
    { [SESSION_STORE]: { earColumnIndex } },
) => earColumnIndex

export const mapCopiedUrlKey = (
    { [SESSION_STORE]: { copiedUrlKey } },
) => copiedUrlKey

export const getMapIsCopiedUrlKey = urlKey => (
    { [SESSION_STORE]: { copiedUrlKey } },
) => urlKey === copiedUrlKey
