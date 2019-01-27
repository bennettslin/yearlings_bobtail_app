import { getArrayOfCoordinatesForFactoredLengths } from '../helper'

const BALCONY_WIDTH_TO_HEIGHT_RATIO = 0.25 // How wide is the balcony.

export const getWallWidth = ({
    isRight,
    prosceniumLeft,
    prosceniumWidth,
    windowWidth

}) => {
    return isRight ? (

        windowWidth
        - prosceniumLeft
        - prosceniumWidth

    ) : prosceniumLeft
}

export const getBalconyColumnCoordinates = ({
    isRight,
    windowWidth,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight,
    ceilingHeight

}) => {
    const
        leftWidth = prosceniumLeft,
        rightWidth =
            windowWidth
            - prosceniumLeft
            - prosceniumWidth,

        wallWidth =
            isRight ?
                rightWidth :
                leftWidth,

        wallHeight = prosceniumHeight,

        // Arbitrary values for now.
        firstColumnBalconyHeight = wallHeight,

        firstColumnBalconyWidth =
            firstColumnBalconyHeight
            * BALCONY_WIDTH_TO_HEIGHT_RATIO,

        rawCoordinatesArray = getArrayOfCoordinatesForFactoredLengths({
            minLength: wallWidth,
            firstLength: firstColumnBalconyWidth,
            multiplyFactor: 1.075, // Gets taller faster with larger value.
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
                ceilingHeight - (balconyHeight - wallHeight) * 0.5,

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
