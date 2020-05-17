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

export const finalSongs = getSongIndicesArray().map(songIndex => {
    const finalSong = {}

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

        addAnnotationMetadata(songIndex, finalSong)
    }

    return finalSong
})

const album = { songs }
export const finalAlbum = { finalSongs }

addWormholeMetadata(finalSongs)
addAdminMetadata(finalAlbum)

// FIXME: Remove.
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
