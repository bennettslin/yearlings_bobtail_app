import { getSongIndicesArray } from './lyrics'
import {
    addSongAndLogueMetadata,
    addSongMetadata
} from './helpers/song'
import { addLyricMetadata } from './helpers/lyric'
import { addUnitAndVerseMetadata } from './helpers/unit'
import { addStanzaMetadata } from './helpers/stanza'
import {
    addScenes,
    addSceneMetadata
} from './helpers/scene'
import { addAnnotationMetadata } from './helpers/annotation'
import { addAdminMetadata } from './helpers/admin'
import { addWormholeMetadata } from './helpers/wormhole'
import { addTip } from './helpers/tips'

// logServe({
//     log: 'Begin parsing album.',
//     action: 'begin',
//     label: 'album'
// })

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

        // TODO: Remove annotations from verses, verses from units.
        const {
            unitVerseIndicesList,
            verseStartTimes
        } = addUnitAndVerseMetadata({
            songIndex,
            songDuration,
            song
        })

        addStanzaMetadata({
            songIndex,
            songDuration,
            unitVerseIndicesList,
            verseStartTimes,
            song
        })

        // TODO: Simplify scenes.
        addSceneMetadata({
            songIndex,
            songDuration,
            unitVerseIndicesList,
            verseStartTimes,
            song
        })

        // TODO: Remove extraneous stuff from cards.
        annotations =
            addAnnotationMetadata(songIndex, song)

        addTip(songIndex, song)
    }

    addScenes(songIndex, song)

    annotationsList.push(annotations)
    return song
})
export const album = { songs }

addWormholeMetadata(annotationsList, album)
addAdminMetadata(annotationsList, album)

// logServe({
//     log: 'End parsing album.',
//     action: 'end',
//     label: 'album'
// })

export default album
