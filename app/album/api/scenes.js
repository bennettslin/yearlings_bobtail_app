import {
    getSong,
    getSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import {
    TIME_STAGE,
    SEASON_STAGE
} from '../../scene/sky/keys'

export const getSceneIndices = songIndex => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which scene array we use is arbitrary.
            getSong(songIndex).sceneDurations.length
        )
)

export const getSceneCountForSong = songIndex => (
    getSceneIndices(songIndex).length
)

export const getVerseIndexForScene = (songIndex, sceneIndex) => {
    const { sceneVerseIndices } = getSong(songIndex)
    return sceneVerseIndices[sceneIndex]
}

// TODO: Explore why sceneIndex is sometimes -1 when loading.
export const getCubesKeyForScene = (songIndex, sceneIndex) => {
    const { sceneCubesKeys } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneCubesKeys[sceneIndex] : DEFAULT_STAGE_KEY
}

export const getLayersForScene = (songIndex, sceneIndex) => {
    const { sceneLayersList } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneLayersList[sceneIndex] : {}
}

export const getSkyTimeForScene = (songIndex, sceneIndex) => {
    const { sceneSkyTimes } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneSkyTimes[sceneIndex] : TIME_STAGE
}

export const getSkySeasonForScene = (songIndex, sceneIndex) => {
    const { sceneSkySeasons } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneSkySeasons[sceneIndex] : SEASON_STAGE
}
