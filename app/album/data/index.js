import { getSongIndicesArray } from './lyrics'
import {
    addSongAndLogueMetadata,
    addSongMetadata
} from './helpers/song'
import { addLyricMetadata } from './helpers/lyric'
import { addUnitAndVerseMetadata } from './helpers/unit'
import { addStanzaMetadata } from './helpers/stanza'
import { addSceneMetadata } from './helpers/scene'
import { addAnnotationMetadata } from './helpers/annotation'
import { addAdminMetadata } from './helpers/admin'
import { addWormholeMetadata } from './helpers/wormhole'

logServe({
    log: 'Begin parsing album.',
    action: 'begin',
    label: 'album'
})

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

        // TODO: Still need to remove annotations from verses.
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
    }

    annotationsList.push(annotations)
    return song
})
export const album = { songs }

addWormholeMetadata(annotationsList, album)
addAdminMetadata(annotationsList, album)

// TODO: Move to helper that adds based on delivery.
global.album = album
global.f = songIndex => album.songs[songIndex]

logServe({
    log: 'End parsing album.',
    action: 'end',
    label: 'album'
})

export default album
