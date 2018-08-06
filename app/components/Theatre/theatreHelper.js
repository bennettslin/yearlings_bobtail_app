import { getLyricColumnHeight } from 'helpers/stageHelper'

export const getCeilingHeight = ({
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

export const getFloorHeight = ({
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
        - stageHeight * 0.9 // Overlap part of stage scene.
        + lyricColumnHeight
    )
}
