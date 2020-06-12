import { createSelector } from 'reselect'
import { mapStageDimensionCoordinates } from '../viewport/selectors'

export const mapStageHeight = createSelector(
    mapStageDimensionCoordinates,
    stageDimensionCoordinates => (
        JSON.parse(stageDimensionCoordinates).stageHeight
    )
)
