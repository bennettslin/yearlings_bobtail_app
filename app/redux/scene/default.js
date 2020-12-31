import { getSceneIndexForVerse } from '../../api/album/verses'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'

export const getSceneDefaults = songIndex => {
    const {
        initialSongIndex,
        initialVerseIndex,
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        sceneSongIndex: initialSongIndex,
        sceneSceneIndex: getSceneIndexForVerse(
            initialSongIndex,
            initialVerseIndex
        ),
    }
}
