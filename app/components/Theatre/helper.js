import { getLyricColumnHeight } from 'helpers/stageHelper'

export const getCeilingHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageTop,
    isHiddenLyric
}) => {

    const lyricColumnHeight = getLyricColumnHeight(
        deviceIndex, isHiddenLyric, windowHeight
    )

    return windowHeight - centreFieldHeight + stageTop - lyricColumnHeight
}

export const getFloorHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageHeight,
    stageTop,
    isHiddenLyric
}) => {

    const lyricColumnHeight = getLyricColumnHeight(
        deviceIndex, isHiddenLyric, windowHeight
    )

    return (
        centreFieldHeight
        - stageTop
        - stageHeight * 0.9 // Overlap part of stage scene.
        + lyricColumnHeight
    )
}
