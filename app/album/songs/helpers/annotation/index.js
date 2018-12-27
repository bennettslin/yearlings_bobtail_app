// TODO: This could be a little neater.

import { registerAnnotation } from './helpers'

import {
    ANNOTATION_SEARCH_KEYS,
    ANCHOR
} from 'constants/lyrics'

const _recurseToFindAnnotations = ({
    rootVerseIndex = -1,
    song,
    verse,
    lyricEntity = verse,
    textKey
}) => {

    const { verseIndex } = lyricEntity

    /**
     * Let subsequent recursions know that we are in a timed verse.
     */
    if (!isNaN(verseIndex)) {
        const { annotations } = song

        rootVerseIndex = verseIndex

        // Add latest annotation index.
        lyricEntity.lastAnnotationIndex = annotations.length

        song.mostRecentVerseIndex = verseIndex
    }

    // Recurse until object with anchor key is found.
    if (Array.isArray(lyricEntity)) {

        lyricEntity.forEach(childEntity => {
            _recurseToFindAnnotations({
                rootVerseIndex,
                song,
                verse,
                lyricEntity: childEntity,
                textKey
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {
            registerAnnotation({
                rootVerseIndex,
                song,
                verse,
                lyricAnnotation: lyricEntity,
                textKey
            })

        } else {
            ANNOTATION_SEARCH_KEYS.forEach(childKey => {
                if (lyricEntity[childKey]) {
                    _recurseToFindAnnotations({
                        rootVerseIndex,
                        song,
                        verse,
                        lyricEntity: lyricEntity[childKey],
                        textKey: (textKey || childKey)
                    })
                }
            })
        }
    }
}

export const addAnnotations = (song) => {
    const { lyricUnits } = song

    if (lyricUnits) {
        song.annotations = []
        song.mostRecentVerseIndex = 0

        lyricUnits.forEach(unit => {
            const {
                    unitMap,
                    lyricUnit
                } = unit,

                lyricUnitAndUnitMap = [
                    ...lyricUnit || [],
                    unitMap
                ]

            lyricUnitAndUnitMap.forEach(verse => {

                _recurseToFindAnnotations({
                    song,
                    verse
                })
            })
        })

        // Clean up.
        delete song.mostRecentVerseIndex
    }
}
