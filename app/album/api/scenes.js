import albumScenes from 'album/scenes'

import { getSong } from 'album/api/songs'
import { getSongVerseConfigs } from 'album/api/verses'

import { DEFAULT_STAGE_KEY } from 'scene/cubesKeys'
import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

const DEFAULT_SCENE = {
    cubes: DEFAULT_STAGE_KEY,
    layers: {},
    sky: {
        time: TIME_ANYTIME,
        season: SEASON_INDOOR
    }
}

export const getSongSceneConfigs = (songIndex) => {
    const { songSceneConfigs } = getSong(songIndex)
    return songSceneConfigs || []
}

export const getVerseIndexForSceneIndex = (
    songIndex,
    sceneIndex
) => {
    const songSceneConfigs = getSongSceneConfigs(songIndex)
    return songSceneConfigs[sceneIndex].firstVerseIndex
}

export const getSceneIndexForVerseIndex = (
    songIndex,
    verseIndex
) => {
    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].sceneIndex :
        0
}

export const getVerseIndexForNextScene = (
    songIndex,
    verseIndex,
    direction = 0
) => {
    const
        songSceneConfigs = getSongSceneConfigs(songIndex),

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

export const getScene = (
    songIndex,
    sceneIndex = -1
) => {
    const songScene = albumScenes[songIndex]

    return sceneIndex > -1 && songScene[sceneIndex] ?
        songScene[sceneIndex] :
        DEFAULT_SCENE
}
