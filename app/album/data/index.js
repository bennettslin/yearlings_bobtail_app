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

// TODO: Eventually don't grab songs here.
import songs, { getSongIndicesArray } from './lyrics'

logServe({
    log: 'Begin parsing album.',
    action: 'begin',
    label: 'album'
})

const annotationsList = []

const finalSongs = getSongIndicesArray().map(songIndex => {
    const finalSong = {}
    let annotations

    const isLogue =
        addSongAndLogueMetadata(songIndex, finalSong)

    if (!isLogue) {
        const songDuration =
            addSongMetadata(songIndex, finalSong)

        addLyricMetadata(songIndex, finalSong)

        // TODO: Still need to remove annotations from verses.
        const {
            unitVerseIndicesList,
            verseStartTimes
        } = addUnitAndVerseMetadata({
            songIndex,
            songDuration,
            finalSong
        })

        addStanzaMetadata({
            songIndex,
            songDuration,
            unitVerseIndicesList,
            verseStartTimes,
            finalSong
        })

        addSceneMetadata({
            songIndex,
            songDuration,
            unitVerseIndicesList,
            verseStartTimes,
            finalSong
        })

        // TODO: Remove extraneous stuff from cards.
        annotations =
            addAnnotationMetadata(songIndex, finalSong)

        // TODO: Add lyric units to finalSongs.
    }

    annotationsList.push(annotations)
    return finalSong
})
export const finalAlbum = { finalSongs }

const album = { songs }

addWormholeMetadata(annotationsList, finalAlbum)
addAdminMetadata(annotationsList, finalAlbum)

// TODO: Move to helper that adds based on delivery.
global.album = album
global.finalAlbum = finalAlbum
global.a = (songIndex) => album.songs[songIndex]
global.f = (songIndex) => finalAlbum.finalSongs[songIndex]

logServe({
    log: 'End parsing album.',
    action: 'end',
    label: 'album'
})

export default album
