import albumScenes from 'album/scenes'

import {
    getSongObject,
    getSongIsLogue
} from 'album/api/songs'
import { getSongVerseConfigs } from 'album/api/verses'

export const getSongSceneConfigs = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songSceneConfigs } = songObject

    return songSceneConfigs || []
}

export const getSceneIndexForVerseIndex = (songIndex, verseIndex) => {

    // Return 0 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const songVerseConfigs = getSongVerseConfigs(songIndex)

    return songVerseConfigs[verseIndex].sceneIndex
}

export const getSceneObject = (
    songIndex,
    sceneIndex = 0,
    scenes = albumScenes
) => {
    const sceneObject = scenes[songIndex]

    return sceneObject[sceneIndex] || null
}
