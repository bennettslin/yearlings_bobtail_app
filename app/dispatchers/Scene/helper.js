import {
    getSongSceneConfigs,
    getSceneIndexForVerseIndex
} from 'album/api/scenes'

export const getVerseIndexForNextScene = (
    songIndex,
    verseIndex,
    direction = 0
) => {
    const songSceneConfigs = getSongSceneConfigs(songIndex)

    if (!songSceneConfigs.length) {
        return -1
    }

    const sceneIndex = getSceneIndexForVerseIndex(
            songIndex,
            verseIndex
        ),

        scenesCount = songSceneConfigs.length,

        nextSceneIndex = (
            sceneIndex
            + direction
            + scenesCount
        ) % scenesCount

    return songSceneConfigs[nextSceneIndex].firstVerseIndex
}
