import { getArrayOfCoordinatesForFactoredLengths } from '../helper'

const BALCONY_WIDTH_TO_HEIGHT_RATIO = 0.3 // How wide is the balcony.

export const getWallWidth = ({
    isRight,
    stageLeft,
    stageWidth,
    windowWidth

}) => {
    return isRight ? (

        windowWidth
        - stageLeft
        - stageWidth

    ) : stageLeft
}

export const getBalconyColumnCoordinates = ({
    isRight,
    windowWidth,
    windowHeight,
    stageLeft,
    stageWidth,
    stageHeight,
    ceilingHeight,
    floorHeight

}) => {
    const
        leftWidth = stageLeft,
        rightWidth =
            windowWidth
            - stageLeft
            - stageWidth,

        wallWidth =
            isRight ?
                rightWidth :
                leftWidth,

        wallHeight =
            windowHeight
            - ceilingHeight
            - floorHeight,

        // Arbitrary values for now.
        firstColumnBalconyHeight = stageHeight,

        firstColumnBalconyWidth =
            firstColumnBalconyHeight
            * BALCONY_WIDTH_TO_HEIGHT_RATIO,

        rawCoordinatesArray = getArrayOfCoordinatesForFactoredLengths({
            minLength: wallWidth,
            firstLength: firstColumnBalconyWidth,
            multiplyFactor: 1.05, // Gets taller faster with larger value.
            overlapRatio: 0.05 // Less bunched up when closer to 0.
        })

    return rawCoordinatesArray.map(rawCoordinates => {

        const {
                length: balconyWidth,
                position: xPosition
            } = rawCoordinates,

            balconyHeight =
                balconyWidth
                / BALCONY_WIDTH_TO_HEIGHT_RATIO,

            balconyTop =
                ceilingHeight
                + (wallHeight - balconyHeight) / 2,

            balconyLeft =
                isRight ?
                    xPosition :
                    wallWidth
                    - balconyWidth
                    - xPosition

        return {
            top: balconyTop,
            left: balconyLeft,
            width: balconyWidth,
            height: balconyHeight
        }
    })
}
