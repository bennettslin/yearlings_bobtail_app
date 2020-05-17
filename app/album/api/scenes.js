import {
    getSong,
    getSongIsLogue
} from './songs'
import albumScenes from '../data/scenes'
import { getArrayOfLength } from '../../helpers/general'

import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import {
    TIME_STAGE,
    SEASON_STAGE
} from '../../scene/sky/keys'

const DEFAULT_SCENE = {
    cubes: DEFAULT_STAGE_KEY,
    layers: {},
    sky: {
        time: TIME_STAGE,
        season: SEASON_STAGE
    }
}

export const getSceneIndices = (songIndex) => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which scene array we use is arbitrary.
            getSong(songIndex).sceneDurations.length
        )
)

export const getSceneCountForSong = (songIndex) => (
    getSceneIndices(songIndex).length
)

export const getVerseIndexForScene = (songIndex, sceneIndex) => {
    const { sceneVerseIndices } = getSong(songIndex)
    return sceneVerseIndices[sceneIndex]
}

// TODO: This should be the one that knows the defaults.
export const getScene = (
    songIndex,
    sceneIndex = -1
) => {
    const songScene = albumScenes[songIndex]

    return sceneIndex > -1 && songScene[sceneIndex] ?
        songScene[sceneIndex] :
        DEFAULT_SCENE
}
