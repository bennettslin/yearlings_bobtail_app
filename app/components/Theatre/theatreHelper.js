import { getLyricColumnHeight } from '../../helpers/stageHelper'

export const getTheatreCeilingHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageTop,
    isHeightlessLyricColumn
}) => {

    const lyricColumnHeight = getLyricColumnHeight(
        deviceIndex, isHeightlessLyricColumn, windowHeight
    )

    return windowHeight - centreFieldHeight + stageTop - lyricColumnHeight
}

export const getTheatreFloorHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageHeight,
    stageTop,
    isHeightlessLyricColumn
}) => {

    const lyricColumnHeight = getLyricColumnHeight(
        deviceIndex, isHeightlessLyricColumn, windowHeight
    )

    return (
        centreFieldHeight
        - stageTop
        - stageHeight * 0.98 // Overlap part of stage scene.
        + lyricColumnHeight
    )
}
