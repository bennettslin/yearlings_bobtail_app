import { getSceneIndexForVerse } from '../../api/album/verses'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'
import {
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX
} from '../selected/default'

export const SCENE_DEFAULTS = {
    sceneSongIndex: INITIAL_SONG_INDEX,
    sceneSceneIndex: getSceneIndexForVerse(
        INITIAL_SONG_INDEX,
        INITIAL_VERSE_INDEX
    )
}

/** */

export const getSceneDefaults = songIndex => {
    const {
        initialSongIndex,
        initialVerseIndex
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        sceneSongIndex: initialSongIndex,
        sceneSceneIndex: getSceneIndexForVerse(
            initialSongIndex,
            initialVerseIndex
        )
    }
}
