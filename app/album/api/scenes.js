import albumScenes from 'album/scenes'

import { getSongObject } from 'album/api/songs'
import { getSongVerseConfigs } from 'album/api/verses'

export const getSongSceneConfigs = (songIndex) => {
    const { songSceneConfigs } = getSongObject(songIndex)
    return songSceneConfigs || []
}

export const getSceneIndexForVerseIndex = (songIndex, verseIndex) => {
    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].sceneIndex :
        0
}

export const getScene = (
    songIndex,
    sceneIndex = 0
) => {
    const songScene = albumScenes[songIndex]
    return songScene[sceneIndex] || null
}
