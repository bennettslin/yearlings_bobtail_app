import albumScenes from 'album/scenes'

import { getSong } from 'album/api/songs'

import { DEFAULT_STAGE_KEY } from 'constants/scene/scenes'
import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky/keys'

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

export const getSongScenesCount = (songIndex) => {
    return getSongSceneConfigs(songIndex).length
}

export const getVerseIndexForSceneIndex = (
    songIndex,
    sceneIndex

) => {
    if (sceneIndex === -1) {
        return -1
    }

    const songSceneConfigs = getSongSceneConfigs(songIndex)
    return songSceneConfigs[sceneIndex].firstVerseIndex
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
