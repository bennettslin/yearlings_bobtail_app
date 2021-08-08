import { getSceneIndexForVerse } from '../../endpoint/album/verses'

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
