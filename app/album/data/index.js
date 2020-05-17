import {
    addIsLogue,
    addOverview,
    addTitle,
    addIsDoublespeaker,
    addDuration
} from './helpers/song'
import { addVerseDurations } from './helpers/verse'
import { addFormTypeIndices } from './helpers/formType'
import { addHasSideCard } from './helpers/sideCard'
import { addUnitAndVerseMetadata } from './helpers/unit'
import { addStanzaMetadata } from './helpers/stanza'
import { addSceneMetadata } from './helpers/scene'
import { addAnnotationMetadata } from './helpers/annotation'
import {
    addDotUnitsCount,
    addPluralCardsCount,
    addGlobalAnnotationIndices
} from './helpers/admin'
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
        addIsLogue(songIndex, finalSong)
    addOverview(songIndex, finalSong)
    addTitle(songIndex, finalSong)

    if (!isLogue) {
        addIsDoublespeaker(songIndex, finalSong)
        addHasSideCard(songIndex, finalSong)
        addFormTypeIndices(songIndex, finalSong)

        const songDuration =
            addDuration(songIndex, finalSong)

        // TODO: Still need to remove annotations from verses.
        const {
            unitVerseIndicesList,
            verseStartTimes
        } = addUnitAndVerseMetadata(songIndex, finalSong)

        // TODO: Add to unit and verse metadata.
        addVerseDurations({
            songDuration,
            verseStartTimes,
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

        addDotUnitsCount(songs[songIndex])
        addPluralCardsCount(songs[songIndex])
    }

    return finalSong
})

logServe({
    log: 'End parsing album.',
    action: 'end',
    label: 'album'
})

const album = { songs }
export const finalAlbum = { finalSongs }

addWormholeMetadata(finalSongs)
addGlobalAnnotationIndices(finalAlbum)

// FIXME: Remove.
global.album = album
global.finalAlbum = finalAlbum

export default album
