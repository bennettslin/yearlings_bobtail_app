import { createSelector } from "reselect"

export const mapStageDimensionCoordinates = (
    { stageStore: { stageDimensionCoordinates } }
) => stageDimensionCoordinates

export const mapStageHeight = createSelector(
    mapStageDimensionCoordinates,
    stageDimensionCoordinates => (
        JSON.parse(stageDimensionCoordinates).stageHeight
    )
)
