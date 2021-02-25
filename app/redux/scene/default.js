import { getSceneIndexForVerse } from '../../api/album/verses'
import { getInitialIndicesFromRoutingOrStorage } from '../../utils/routing/routing'

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
