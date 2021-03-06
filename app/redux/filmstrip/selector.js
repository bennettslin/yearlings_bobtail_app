import { createSelector } from 'reselect'
import { getSceneDimensionCoordinate } from '../../helpers/filmstrip'
import { mapSelectedSongIndex } from '../selected/selector'

export const getMapSceneDimensionCoordinate = sceneIndex => createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSceneDimensionCoordinate(
        selectedSongIndex,
        sceneIndex,
    ),
)
