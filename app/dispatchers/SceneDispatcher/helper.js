import {
    getSongIsLogue,
    getSongSceneConfigs,
    getSceneIndexForVerseIndex
} from '../../helpers/dataHelper'

export const getVerseIndexForNextScene = (
    songIndex,
    verseIndex,
    direction = 0
) => {

    // Return -1 if logue.
    if (getSongIsLogue(songIndex)) {
        return -1
    }

    const songSceneConfigs = getSongSceneConfigs(songIndex),

        currentSceneIndex = getSceneIndexForVerseIndex(
            songIndex,
            verseIndex
        ),

        scenesCount = songSceneConfigs.length,

        nextSceneIndex = (
            currentSceneIndex
            + direction
            + scenesCount
        ) % scenesCount

    return songSceneConfigs[nextSceneIndex].firstVerseIndex
}
