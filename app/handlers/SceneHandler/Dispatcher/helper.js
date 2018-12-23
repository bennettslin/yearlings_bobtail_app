import {
    getSongSceneConfigs,
    getSceneIndexForVerseIndex
} from '../../../helpers/data'

import { getSongIsLogue } from 'album/api/songs'

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

        sceneIndex = getSceneIndexForVerseIndex(
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
