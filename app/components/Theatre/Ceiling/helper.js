import { getArrayOfCoordinatesForFactoredLengths } from '../helper'

const RAFTER_HEIGHT_TO_WIDTH_RATIO = 0.02 // How tall is the rafter.

export const getRaftersRowCoordinates = ({
    prosceniumLeft,
    prosceniumWidth,
    ceilingHeight

}) => {
    const stageCentreFromLeft = prosceniumLeft + (prosceniumWidth / 2),

        // Arbitrary values for now.
        firstRowRafterWidth = prosceniumWidth * 1.1,
        firstRowRafterHeight = firstRowRafterWidth * RAFTER_HEIGHT_TO_WIDTH_RATIO,

        rawCoordinatesArray = getArrayOfCoordinatesForFactoredLengths({
            minLength: ceilingHeight,
            firstLength: firstRowRafterHeight,
            multiplyFactor: 1.2, // Gets wider faster with larger value.
            overlapRatio: 0.25 // Less bunched up when closer to 0.
        })

    return rawCoordinatesArray.map(rawCoordinates => {
        const {
                length: rafterHeight,
                position: rafterBottom
            } = rawCoordinates,

            rafterWidth = rafterHeight /
                RAFTER_HEIGHT_TO_WIDTH_RATIO,

            rafterTop =
                ceilingHeight
                - rafterHeight
                - rafterBottom,
            rafterLeft =
                stageCentreFromLeft
                - rafterWidth / 2

        return {
            top: rafterTop,
            left: rafterLeft,
            width: rafterWidth,
            height: rafterHeight
        }
    })
}
