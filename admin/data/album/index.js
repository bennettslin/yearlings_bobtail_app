import { getSongIndicesArray } from './lyrics'
import {
    addSongAndLogueMetadata,
    addSongMetadata,
} from './helpers/song'
import { addLyricMetadata } from './helpers/lyric'
import { addUnitAndVerseMetadata } from './helpers/unit'
import { addStanzaMetadata } from './helpers/stanza'
import {
    addScenes,
    addSceneMetadata,
} from './helpers/scene'
import { addAnnotationMetadata } from './helpers/annotation'
import {
    getMaxSceneCount,
    getMaxVerseCount,
} from './helpers/count'
import { addTip } from './helpers/tips'
import { addVerseMetadata } from './helpers/verse'
import { addWormholeMetadata } from './helpers/wormhole'
import { getSmartQuotedEntity } from '../../utils/format/smartQuote'
import { RUNTIME } from '../../../src/constants/server'

const annotationsList = []

const songs = getSongIndicesArray().map(songIndex => {
    const song = {}
    let annotations

    const isLogue =
        addSongAndLogueMetadata(songIndex, song)

    if (!isLogue) {
        const songDuration =
            addSongMetadata(songIndex, song)

        addLyricMetadata(songIndex, song)

        const {
            unitVerseIndicesList,
            verseStartTimes,
            verses,
        } = addUnitAndVerseMetadata({
            songIndex,
            songDuration,
            song,
        })

        // Safety check.
        verseStartTimes.forEach((startTime, index) => {
            if (startTime < verseStartTimes[index - 1]) {
                throw new Error(`Verse ${index} has an earlier start time than the previous verse!`)
            }
        })

        addStanzaMetadata({
            songIndex,
            songDuration,
            unitVerseIndicesList,
            verseStartTimes,
            song,
        })

        addSceneMetadata({
            songIndex,
            songDuration,
            unitVerseIndicesList,
            verseStartTimes,
            song,
        })

        annotations =
            addAnnotationMetadata(songIndex, song)

        addVerseMetadata(verses, song)
        addTip(songIndex, song)
    }

    addScenes(songIndex, song)

    annotationsList.push(annotations)
    return song
})

const album = {
    // Dev sanity check. When compiled, this gets replaced.
    _build: RUNTIME,
    title: getSmartQuotedEntity(`Yearling's Bobtail`),
    songs,
    maxSceneCount: getMaxSceneCount(songs),
    maxVerseCount: getMaxVerseCount(songs),
}

addWormholeMetadata(annotationsList, album)

export default album
