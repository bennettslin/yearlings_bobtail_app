import { getSceneIndexForVerse } from '../../api/album/verses'

export const getSceneDefaults = ({
    initialSongIndex,
    initialVerseIndex,
}) => ({
    sceneSongIndex: initialSongIndex,
    sceneSceneIndex: getSceneIndexForVerse(
        initialSongIndex,
        initialVerseIndex,
    ),
})
