import { createSelector } from 'reselect'
import { mapStageDimensionCoordinates } from '../viewport/selector'

export const mapStageHeight = createSelector(
    mapStageDimensionCoordinates,
    stageDimensionCoordinates => (
        JSON.parse(stageDimensionCoordinates).stageHeight
    )
)
