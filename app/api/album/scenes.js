import {
    getSong,
    getSongIsLogue
} from './songs'
import { getCharStringForNumber } from '../../helpers/format'
import { getArrayOfLength } from '../../helpers/general'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import {
    TIME_STAGE,
    SEASON_STAGE
} from '../../constants/scene/sky'

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
    if (sceneIndex === -1) {
        return -1
    }

    const { sceneVerseIndices } = getSong(songIndex)
    return sceneVerseIndices[sceneIndex]
}

export const getCubesKeyForScene = (songIndex, sceneIndex) => {
    const { sceneCubesKeys } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneCubesKeys[sceneIndex] : DEFAULT_STAGE_KEY
}

export const getLayersForScene = (songIndex, sceneIndex) => {
    const { sceneLayersList } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneLayersList[sceneIndex] : {}
}

export const getLayerForScene = (songIndex, sceneIndex, yIndex) => {
    const sceneLayers = getLayersForScene(songIndex, sceneIndex)
    return sceneLayers[`layer_${getCharStringForNumber(yIndex)}`] || {}
}

export const getSkyTimeForScene = (songIndex, sceneIndex) => {
    const { sceneSkyTimes } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneSkyTimes[sceneIndex] : TIME_STAGE
}

export const getSkySeasonForScene = (songIndex, sceneIndex) => {
    const { sceneSkySeasons } = getSong(songIndex)
    return sceneIndex >= 0 ? sceneSkySeasons[sceneIndex] : SEASON_STAGE
}
