// TODO: This could be a little neater.
import isNumber from 'lodash.isnumber'
import { registerAnnotation } from './helpers'

import {
    ANNOTATION_SEARCH_KEYS,
    ANCHOR,
    LEFT,
    RIGHT
} from 'constants/lyrics'

const _recurseToFindAnnotations = ({
    song,
    verse,
    columnKey,
    rootVerseIndex = -1,
    lyricEntity = verse,
    textKey
}) => {

    const { verseIndex } = lyricEntity

    /**
     * Let subsequent recursions know that we are in a timed verse.
     */
    if (isNumber(verseIndex)) {
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
                song,
                verse,
                columnKey,
                rootVerseIndex,
                lyricEntity: childEntity,
                textKey
            })
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity[ANCHOR]) {
            registerAnnotation({
                song,
                verse,
                columnKey,
                rootVerseIndex,
                lyricAnnotation: lyricEntity,
                textKey
            })

        } else {
            ANNOTATION_SEARCH_KEYS.forEach(childKey => {
                if (lyricEntity[childKey]) {
                    _recurseToFindAnnotations({
                        song,
                        verse,
                        columnKey,
                        rootVerseIndex,
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
                    mainVerses
                } = unit,

                mainVersesAndUnitMap = [
                    ...mainVerses || [],
                    unitMap
                ]

            mainVersesAndUnitMap.forEach(verse => {
                let columnKey

                // If this unit has a side card...
                if (unitMap.sideCard) {

                    // ... and this verse is in it, show in right column.
                    if (verse.sideCard) {
                        columnKey = RIGHT

                    // ... otherwise, show in left column.
                    } else {
                        columnKey = LEFT
                    }
                }

                _recurseToFindAnnotations({
                    song,
                    verse,
                    columnKey
                })
            })
        })

        // Clean up.
        delete song.mostRecentVerseIndex
    }
}
